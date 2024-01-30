import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{
  counter:number=0;
  subscription:Subscription;
  ngOnInit(){
    var promise=new Promise(resolve=>{
      console.log("promise called");
      setInterval(()=>{
        this.counter+=1
        //console.log(this.counter)
      }
       ,1000)
    })
    //promise.then(res=>console.log(res))

    var observable=new Observable(sub=>{
      console.log("Observable called");
      setInterval(()=>{
        this.counter+=1
        sub.next(this.counter)
      }
       ,1000)
       
    });
    this.subscription=observable.subscribe(res=>console.log(res));
    
  }

  ngOnDestroy(){
    console.log("destroy called");
    this.subscription.unsubscribe();
    console.log('unsubscribed')
  }
 
}
