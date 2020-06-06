import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { TagInputModule } from 'ngx-chips';
import { UniversityComponent } from './university/university.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    NgxElectronModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
