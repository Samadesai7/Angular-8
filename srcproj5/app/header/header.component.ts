import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  private title:string=null;
  private logourl:string=null;

public  constructor() {
  this.title="Angular Component";
  this.logourl="assets/hock.jpg";
 }
}
