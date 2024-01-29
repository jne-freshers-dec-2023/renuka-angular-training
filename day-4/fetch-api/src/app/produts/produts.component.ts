import { ProductService } from './../product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit{
  

  products: any;
  url='http://localhost:8080/products' ;
  id:any;
  constructor(private httpClient: HttpClient,private productService: ProductService,private router: Router){}
  ngOnInit(){ 
    this.getProducts()
  
  }
  getProducts(){
    this.httpClient.get(this.url).subscribe(
      res=>
      this.products=res
    )
  }

  deleteProductWithId(id:number){
    this.productService.deleteProduct(id).subscribe(
      data=> {
        console.log(data)
        this.getProducts()
      }
    )
  }
 
  updateProduct(id: number){
    this.router.navigate(["updateproduct",id])
    console.log(this.productService.getProductById(id))
  }
}
