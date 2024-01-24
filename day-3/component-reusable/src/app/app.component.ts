import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-reusable';
  data='';
  updateData(text:any){
    console.log(text)
    this.data= text;
  }

  item=10;
  updateChild(){
    this.item= Math.floor(Math.random()*100);
  }
}
