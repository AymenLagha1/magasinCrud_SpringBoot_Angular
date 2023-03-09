import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  id!: number;

  categoryForm : FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required])
  }); 
  
  constructor(private categoryService : CategoryService,private router : Router,private activatedRoute: ActivatedRoute) {     
}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.categoryService.getCategoryById(this.id).subscribe(data=>{
        this.categoryForm.patchValue(data);
      })
    }
    
  }

  onSubmit() {
    if(this.id){
      this.categoryService.updateCategory({id:this.id,...this.categoryForm.value}).subscribe(()=>{
        this.router.navigate(['categories']);
      })
    }else{
      this.categoryService.createCategory(this.categoryForm.value).subscribe(()=>{
        this.router.navigate(['categories']);
      })
    }
 }
}
