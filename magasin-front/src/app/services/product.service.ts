import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>('/api/product/all').pipe();
  }
  createProduct(product : Product):Observable<Product>{
    return this.httpClient.post<Product>("/api/product/create",product).pipe();
  }
  updateProduct(product : Product):Observable<Product>{
    return this.httpClient.put<Product>("/api/product/update",product).pipe();
  }
  fetchProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`/api/product/${id}`).pipe(   )
  }
  deleteProductById(id : number):Observable<String>{
    return this.httpClient.delete<String>("/api/product/delete/"+id).pipe();
  }

}
