import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  producturl='http://localhost:8080/product' ;
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.producturl}`);
  }

  createProduct(product:Product): Observable<Object>{
    return this.httpClient.post(`${this.producturl}`,product)
  }

  deleteProduct(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.producturl}/${id}`)
  }

  getProductById(id: number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.producturl}/${id}`)
  }

  updateProduct(id:number,product:Product){
    return this.httpClient.put(`${this.producturl}/${id}`,product);
  }
}
