import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count=0;
  counter(operator:String){
    operator === 'add' ? this.count++: this.count--;
  } 
  username="John";
  disable= false

  users= ['ram','sita','geeta','ganesh'];
  userDetails= [
      { 
        'name':'ram',
        'username': 'ram123',
        'email': 'ram@gmail.com'
      },
      {
        'name': 'sita',
        'username':'sita123',
        'email': 'sita@gmail.com'},
      {
        'name':'geeta',
        'username':'geeta123',
        'email':'geeta@gmail.com'
      }
  ]
}
