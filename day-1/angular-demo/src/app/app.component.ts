import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  additionResult(num1:number,num2:number){
    console.log(num1+num2);
  };
  val: any;
  calling(){
    this.val = show()
    console.log("value is:"+this.val);
  };
  
}

//outside function
function show(){
  let value =10;
  console.log("outside function");
  return value;
}
 