import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeIndexComponent } from './notice-index/notice-index.component';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { NoticeAddComponent } from './notice-add/notice-add.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NoticeReviseComponent } from './notice-revise/notice-revise.component';
@NgModule({
  declarations: [
    AppComponent,
    NoticeIndexComponent,
    NoticeAddComponent,
    NoticeReviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule
    
  ],
  providers: [HttpClient,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
