import * as InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { Component, OnInit } from "@angular/core";
import {Config} from '../config/config';
import { HttpClient } from "@angular/common/http";
import { _ } from "underscore";
import Swal from 'sweetalert2'


@Component({
  selector: "app-university",
  templateUrl: "./university.component.html",
  styleUrls: ["./university.component.scss"]
})
export class UniversityComponent implements OnInit {

  blogTitle = '';
  public Editor = InlineEditor;
  public uri = Config.uri;
  public active: boolean = true;
  public contentType: any;
  public model = {
    data: 'Enter something here',
    blogList: [],
    currentBlog: null,
    imgURL: null,
    logo: null,
    universityList: [],
    newsList: [],
    eventList: [],
    courseList: [],
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

  public renderList = [
    { 
      mode: 'university', id: 'UniversityList', name: 'University Profiles', modelList: 'universityList', addName: 'Add University' 
    },
    {
      mode: 'courses', id: 'CoursesList', name: 'Courses List', modelList: 'courseList', addName: 'Add Course'
    },
    {
      mode: 'blogs', id: 'BlogsList', name: 'Blogs', modelList: 'blogList', addName: 'Add Blog'
    },
    {
      mode: 'news', id: 'NewsList', name: 'News', modelList: 'newsList', addName: 'Add News'
    },
    {
      mode: 'event', id: 'EventsList', name: 'Events', modelList: 'eventList', addName: 'Add Event'
    },
    {
      mode: 'landingPage', id: 'LandingPageList', name: 'Landing Page', modelList: 'landingPageList', addName: 'Add Landing Page'
    }
  ];

  constructor(private http: HttpClient) {
    this.fetchList();
  }

  public changeMode(value) {
    this.contentType = value;
    this.model.blogData = {
      title: null,
      publish: null,
      tags: [],
    };
    this.model.imgURL = null;
    this.model.logo = null;
    this.model.data = null;
  }

  public generateUrl() {
    if (this.model.blogData!.title) {
      let value = this.model.blogData.title.replace(/\s+/g, '-').toLowerCase();
  
      switch(this.contentType) {
        case 'university': return `https://studyin-ireland.in/universities/${value}/`;
        case 'courses': return `https://studyin-ireland.in/courses/${value}/`;
        case 'blogs': return `https://studyin-ireland.in/blog/${value}/`;
        case 'news': return `https://studyin-ireland.in/news/${value}/`;
        case 'event': return `https://studyin-ireland.in/events/${value}/`;
        case 'landingPage': return `https://studyin-ireland.in/landing-pages/${value}/index.html`;
      }
    }
    
    return '';
  }

  public renderImage(isLogo = false) {
    if (this.contentType) {
      if (this.contentType === 'university') { return true };
      if (this.contentType === 'blogs') {
        if (isLogo) { return false; }
        return true;
      }
      if (this.contentType === 'landingPage') {
        if (isLogo) { return false; }
        return true;
      }
      if (this.contentType === 'courses') { return false };
      if (this.contentType === 'news') { return false };
      if (this.contentType === 'event') { return false };

    }

    return false;
  }

  public editTitle() {
    this.active = !this.active;
  }

  // overwriting particular blog file after button click

  public uploadLandingPage(){
    this.http.post(`${this.uri}/upload-landing-page`, this.model).toPromise()
    .then((res: any) => {
      this.fetchList('Landing Page');
    })
  }

  public uploadPost(type): void {
    this.model.blogData.publish = type;

    let data = {
      university: { endpoint: 'upload', resourceName: 'University' },
      blogs: { endpoint: 'upload-blog', resourceName: 'Blog' },
      news: { endpoint: 'upload-news', resourceName: 'News' },
      event: { endpoint: 'upload-event', resourceName: 'Event' },
      courses: { endpoint: 'upload-course', resourceName: 'Course' },
      landingPage: { endpoint: 'upload-landing-page', resourceName: 'Landing Page' },
    };

    let resource = data[this.contentType];
    
    this.http.post(`${this.uri}/${resource.endpoint}`, this.model).toPromise()
      .then((res: any) => {
        this.fetchList(`${resource.resourceName}`);
      });
  }

  // display particular blog data


  show(list, type) {
    this.contentType = type;
    this.model.currentBlog = list;
    this.http
      .post(`${this.uri}/fetch-${type}`, this.model)
      .toPromise()
      .then((res: any) => {
        if (res.data) { this.model.data = res.data; }
        if (res.blogData) { this.model.blogData = res.blogData; }
        if (res.universityList) { this.model.universityList = res.universityList; }
        if (res.blogList) { this.model.blogList = res.blogList; }
        if (res.newsList) { this.model.newsList = res.newsList; }
        if (res.eventList) { this.model.eventList = res.eventList; }
        if (res.imgURL) { this.model.imgURL = res.imgURL; }
      });
  }

  delete(list, type) {
    this.http
      .post(`${this.uri}/delete`, { title: list, type })
      .toPromise()
      .then(res => {
        this.fetchList();
      });
  }

  public createBlog(blogName, type) {
    this.http
      .post(`${this.uri}/create`, { title: blogName, type })
      .toPromise()
      .then(res => {
        this.http
          .get(`${this.uri}/fetch-list`)
          .toPromise()
          .then((res: any) => {
            this.model.universityList = res.universityList;
            this.model.blogList = res.blogList;
            this.model.newsList = res.newsList;
            this.model.eventList = res.eventList;
            this.model.landingPageList = res.landingPageList;
            this.model.courseList = res.courseList;
          });
      });
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


  fetchList(resourse = null): Promise<any> {
    return this.http.get(`${this.uri}/fetch-list`).toPromise()
      .then((res: any) => {
        this.model.universityList = res.universityList;
        this.model.blogList = res.blogList;
        this.model.newsList = res.newsList;
        this.model.eventList = res.eventList;
        this.model.courseList = res.courseList;
        this.model.landingPageList = res.landingPageList;

        if (resourse) {
          Swal.fire({
            icon: 'success',
            title: `${resourse} has been saved`,
            showConfirmButton: false,
            timer: 3000
          });
        }
      })
  }

  ngOnInit() {}
}
