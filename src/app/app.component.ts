import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private firstNumber:number=null;
  private secondNumber:number=null;
  private result:number=null;

public getAdd(){
  this.result=this.firstNumber+this.secondNumber;
  
}
public getSub(){
  this.result=this.firstNumber-this.secondNumber;
  
}
public getMul(){
  this.result=this.firstNumber*this.secondNumber;
  
}
public getDiv(){
  this.result=this.firstNumber/this.secondNumber;
  
}
}