import { AfterViewInit, Component, ViewChild } from '@angular/core';

import {ElectronService} from 'ngx-electron';
import {UniversityComponent} from './university/university.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor() { 
    // this._electronService.ipcRenderer.on('messageFromService', (event) => {
    //   console.log(event);
    // });
  }
  title = 'si-website-generator';
  public fileAccess(): void {
    // if(this._electronService.isElectronApp){
    //   this._electronService.ipcRenderer.send('openModal', 'abc');   
    // }
  }
}
