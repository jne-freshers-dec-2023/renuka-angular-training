import { ProdutsComponent } from './../produts/produts.component';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  product:Product=new Product();
  

  constructor(private productService:ProductService){
    console.log('create product')
  }
  saveProduct(){
    this.product.pid=Math.floor(Math.random()*100)
    this.productService.createProduct(this.product).subscribe(
      data=> {
          this.productService.getProductList();
      },
      error=>console.error(error)
    )
  }
}
