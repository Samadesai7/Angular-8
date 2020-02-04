import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name:string=null;
  private jobtitle:string=null;
  private salary:number=null;
  private annualsalary:number=null;
  private logo:string=null;
  private userName:string=null;
  public constructor(){
    this.name="sama";
    this.jobtitle="FSD engineer";
    this.salary=50000;
    this.logo="assets/img.jpg";
    
  }
  public getannualsalary():number{
    this.annualsalary=this.salary*12;
    return this.annualsalary;
  }
  public greetUser():void{
    this.userName="MS"+this.userName;
    alert('welcome'+this.userName);
  }
  
}
