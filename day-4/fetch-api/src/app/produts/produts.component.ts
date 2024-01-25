import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
  products: any;
  url='http://localhost:8080/products' ;
  id:any;
  constructor(private http: HttpClient){
    http.get(this.url)
    .subscribe(response=>
      this.products=response
      ); 
  }
}
