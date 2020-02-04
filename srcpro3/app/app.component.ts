import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private Message:string=null;
  private Version:number=null;
  private Topics:string[]=null;
  private ind:number=null;
  public constructor(){
    this.Message="Welcome!";
    this.Version=8;
    this.Topics=['Data Binding','Forms','Http','Routing'];

  }
  public addTopic(currentTopic:string):boolean{
    if(currentTopic.length==0){
      alert(`Required Field`);
      return false;
    }
    for(var topic of this.Topics)
    {
        if(currentTopic==topic)
        {
          alert(`Duplicate value...!Enter new value`);
          return false;
        }
     }
     this.Topics.push(currentTopic);
  }
  public deleteTopic(idx:number):void{
    alert('Entered data  deleted');
    this.Topics.splice(idx,1);
  }
  public deleteTopics(currentTopic:string):void{
    alert('Entered data deleted');
    for(var topic of this.Topics)
    {
        if(currentTopic==topic){
          this.ind =this.Topics.indexOf(currentTopic);
          this.Topics.splice(this.ind,1);
        }
    }
  }
  public searchTopic(currentTopic:string):void{
    for(var topic of this.Topics){
      if(currentTopic==topic){
        this.ind =this.Topics.indexOf(currentTopic);
        alert(`Element Found at`+ (this.ind+1));
      }
    }
  }
}