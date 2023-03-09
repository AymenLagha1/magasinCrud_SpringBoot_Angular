import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  faTrash = faTrash;
  faPen = faPen;

  categories : Category[] = [];

  constructor(private categoryService:CategoryService,private router : Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  delete(categoryId : number | undefined,index:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        if(categoryId){
          this.categoryService.deleteCategoryById(categoryId).subscribe(()=>{
            this.getAllCategories();
          },(e)=>console.log(e))
        }
        
      }
    })
  }
}
