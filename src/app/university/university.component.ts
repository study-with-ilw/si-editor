import * as InlineEditor from "@ckeditor/ckeditor5-build-inline";

import { Component, EventEmitter, OnInit } from "@angular/core";

import {Config} from '../config/config';
// import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// import {ElectronService} from 'ngx-electron';
import { HttpClient } from "@angular/common/http";
import { _ } from "underscore";

@Component({
  selector: "app-university",
  templateUrl: "./university.component.html",
  styleUrls: ["./university.component.scss"]
})
export class UniversityComponent implements OnInit {
  blogTitle = '';
  public Editor = InlineEditor;
  public uri = Config.uri;
  public landingPage = false;
  public active: boolean = true;
  public contentType: any;
  public model = {
    data: 'Enter something here',
    blogList: [],
    currentBlog: null,
    imgURL: null,
    logo: null,
    newsList: [],
    eventList: [],
    landingPageList: [],
    blogData: {
      title: null,
      publish: null,
      tags: [],
    }
  };
  public blogModel = {
    data: null,
    blogList: [],
    currentBlog: null,
    imgURL: null,
    blogData: {
      title: null,
      tags: [],
    }
  };

  constructor(private http: HttpClient) {
    this.http
      .get(`${this.uri}/fetch-list`)
      .toPromise()
      .then((res: any) => {
        this.model.blogList = res.universityList;
        this.blogModel.blogList = res.blogList;
        this.model.newsList = res.newsList;
        this.model.eventList = res.eventList;
        this.model.landingPageList = res.landingPageList;
      });
  }

  public editTitle() {
    this.active = !this.active;
  }

  // overwriting particular blog file after button click

  public uploadLandingPage(){
    console.log(this.model);
    this.http.post(`${this.uri}/upload-landing-page`, this.model).toPromise()
    .then((res: any) => {
      this.http.get(`${this.uri}/fetch-list`);
    })
  }

  public uploadPost(type): void {
    this.model.blogData.publish = type;
    if (this.contentType === "university") {
      this.http
        .post(`${this.uri}/upload`, this.model)
        .toPromise()
        .then((res: any) => {
          this.http
            .get(`${this.uri}/fetch-list`)
            .toPromise()
            .then((res: any) => {
              this.model.blogList = res.universityList;
              this.blogModel.blogList = res.blogList;
            });
        });
    } else if(this.contentType === 'news'){
      this.http.post(`${this.uri}/upload-news`, this.model).toPromise()
      .then((res: any) => {
        console.log('news', res);
        this.http.get(`${this.uri}/fetch-list`).toPromise()
        .then((res: any) => {
          this.model.blogList = res.universityList;
          this.blogModel.blogList = res.blogList;
          this.model.newsList = res.newsList;
          this.model.eventList = res.eventList;
        });
      });
    }else if(this.contentType === 'event'){
      this.http.post(`${this.uri}/upload-event`, this.model).toPromise()
      .then((res: any) => {
        this.http.get(`${this.uri}/fetch-list`).toPromise()
        .then((res: any) => {
          this.model.blogList = res.universityList;
          this.blogModel.blogList = res.blogList;
          this.model.newsList = res.newsList;
          this.model.eventList = res.eventList;
        });
      });
    }else {
      this.http
        .post(`${this.uri}/upload-blog`, this.model)
        .toPromise()
        .then((res: any) => {
          this.http
            .get(`${this.uri}/fetch-list`)
            .toPromise()
            .then((res: any) => {
              this.model.blogList = res.universityList;
              this.blogModel.blogList = res.blogList;
            });
        });
    }
  }

  // display particular blog data

  showUniversity(list, type) {
    this.contentType = type;
    this.model.currentBlog = list;
    this.http
      .post(`${this.uri}/fetch-university`, this.model)
      .toPromise()
      .then((res: any) => {
        this.model.data = res.data;
        this.model.blogData = res.blogData;
        this.model.blogList = res.blogList;
        this.model.imgURL = res.imgURL;
      });
  }

  showBlog(list, type) {
    this.contentType = type;
    this.model.currentBlog = list;
    this.http
      .post(`${this.uri}/fetch-blogs`, this.model)
      .toPromise()
      .then((res: any) => {
        this.model.data = res.data;
        this.model.blogData = res.blogData;
        this.blogModel.blogList = res.blogList;
        this.model.imgURL = res.imgURL;
      });
  }

  show(list, type) {
    this.contentType = type;
    this.model.currentBlog = list;
    this.http
      .post(`${this.uri}/fetch-${type}`, this.model)
      .toPromise()
      .then((res: any) => {
        this.model.data = res.data;
        this.model.blogData = res.blogData;
        this.model.newsList = res.newsList;
        this.model.eventList = res.eventList;
        this.model.imgURL = res.imgURL;
    });
  }

  delete(list, type) {
    console.log(list, type);
    this.http
      .post(`${this.uri}/delete`, { title: list, type })
      .toPromise()
      .then(res => {
        console.log(res);
        this.http
          .get(`${this.uri}/fetch-list`)
          .toPromise()
          .then((res: any) => {
            this.model.blogList = res.universityList;
            this.blogModel.blogList = res.blogList;
            this.model.newsList = res.newsList;
            this.model.eventList = res.eventList;
            this.model.landingPageList = res.landingPageList;
          });
      });
  }

  public createBlog(blogName, type) {
    this.http
      .post(`${this.uri}/create`, { title: blogName, type })
      .toPromise()
      .then(res => {
        console.log(res);
        this.http
          .get(`${this.uri}/fetch-list`)
          .toPromise()
          .then((res: any) => {
            this.model.blogList = res.universityList;
            this.blogModel.blogList = res.blogList;
            this.model.newsList = res.newsList;
            this.model.eventList = res.eventList;
            this.model.landingPageList = res.landingPageList;
          });
      });
  }

  switchToLandingPage(){
    this.landingPage = !this.landingPage;
  }

  public imagePath;
  // imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.model.imgURL = reader.result;
    };
  }

  logo(files) {
    console.log(files)
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.model.logo = reader.result;
    };
  }

  launchSnackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  ngOnInit() {}
}
