import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  id:number;
  product:Product=new Product();
  constructor(private productService: ProductService, private route: ActivatedRoute, private router:Router){
    console.log('update product')
   
  }
  ngOnInit(){
    console.log("inside init")  
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      data=>{
        this.product=data;
        console.log(this.product)
      })
  }
  updateProductById(){
   this.productService.updateProduct(this.id,this.product).subscribe(
    data=> 
      this.router.navigate(['/products'])
      
   )
  }
}
