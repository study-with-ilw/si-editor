import { Component, EventEmitter, OnInit } from '@angular/core';

import {Config} from '../config/config';
import {ElectronService} from 'ngx-electron';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  public msg: string;
  public commit(){
    console.log(this.msg);
    // if(this._electronService.isElectronApp){
    //   this._electronService.ipcRenderer.sendSync('commit', this.msg)
    // }

    this.http.post(`${Config.uri}/commit`, { message: this.msg})
      .toPromise().then((res:any) => {

      });
  }

}
