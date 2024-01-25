import { Component } from '@angular/core';

@Component({
  selector: 'app-user-inline-style',
  templateUrl: './user-inline-style.component.html',
  styles: [
    `.inline-style{
      color: red;
    }
    *{
      background-color: yellow;
    }`
  ]
})
export class UserInlineStyleComponent {
  
}
