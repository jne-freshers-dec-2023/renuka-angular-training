import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginform= new FormGroup({
    username: new FormControl('username',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl("abc123",[Validators.pattern('/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/')])
  })
  loggedIn(){
    console.log(this.loginform.value)
  }
  get username(){
    return this.loginform.get('username'); 
  }

  get password(){
    return this.loginform.get('password');
  }
  get email(){
    return this.loginform.get('email')
  }
}
