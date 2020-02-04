import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class BindDemoComponent {
  private message:string;
  private name:string= "Angular";
  private isBig:boolean=true;
  public constructor(){
    this.message=new Date().toString();
  }
  public toggleBig(){
    this.isBig=!this.isBig;
  }
  public showMouse(e){
    console.log('x=${e,x},y=${e,x}');
  }
  
}
