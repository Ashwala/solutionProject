import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { Service } from './service/service';
import { UrlConstants } from './service/url';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragScrollModule,
  ],
  providers: [Service, UrlConstants],
  bootstrap: [AppComponent]
})
export class AppModule { } 