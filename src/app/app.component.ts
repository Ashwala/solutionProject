import { Component, ViewChild } from '@angular/core';
import { Service } from './service/service';
import { UrlConstants } from './service/url';
import { DragScrollComponent } from 'ngx-drag-scroll';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DragScrollComponent) ds: DragScrollComponent;
  getList: any;
  errorMessage: any;
  urlConstant: any = this.url.getUrl();
  buttonList = [];
  showPopup = false;
  viewData: any;
  errorData: string;
  constructor(private _service: Service, private url: UrlConstants) { }

  public getData() {
    this.generateButtonList();
    this._service.getData(this.urlConstant.getList).subscribe(res => {
      if (res) {
        this.getList = res.results;
      }
    }, error => {
      this.errorMessage = error;
    });
  }
  private generateButtonList() {
    this.buttonList = [];
    const noOfbuttons = 20;
    for (let i = 0; i <= noOfbuttons; i++) {
      this.buttonList.push(i);
    }
  }
  public viewDetails(data) {
    this.showPopup = !this.showPopup;
    this.viewData = data;
  }
  public nextOrPrev(index) {
    this.errorData = '';
    this.ds.moveTo(index);
    const total = this.getList.length;
    if (index + 1 > total) {
      this.errorData = 'No image has been found';
    }
  }
} 