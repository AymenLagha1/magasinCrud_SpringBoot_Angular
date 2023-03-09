import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  getAllCategories() : Observable<Category[]>{
    return this.httpClient.get<Category[]>('/api/category/all')
  }
  getCategoryById(id : number) : Observable<Category>{
    return this.httpClient.get<Category>(`/api/category/${id}`)
  }
  createCategory(category : Category):Observable<Category>{
    return this.httpClient.post<Category>("/api/category/create",category);
  }
  updateCategory(category : Category):Observable<Category>{
    return this.httpClient.put<Category>("/api/category/update",category);
  }
  deleteCategoryById(id : number):Observable<any>{
    return this.httpClient.delete<any>(`/api/category/delete/${id}`,);
  }
}
