import { Component } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent {

  age:any;
  getAge(inputage: any){
    this.age= inputage
  }

  eligible :boolean | undefined ; 

  isValidVoter(){
       if(this.age>= 18){
      this.eligible= true;
  
    }  
    else{
      this.eligible= false;      
      
    }
  }
}

  
