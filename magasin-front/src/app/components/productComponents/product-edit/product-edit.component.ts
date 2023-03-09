import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit  {


  id!: number;
  categories! : Category[] ;

  productForm : FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    category: new FormControl(null),
    quantity: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
  }); ;
  
  constructor(private categoryService : CategoryService,private productService : ProductService,private router : Router,private activatedRoute: ActivatedRoute) {     
   }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data=>{
      this.categories= data;
    })  
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.fetchProductById(this.id).subscribe(data=>{
      this.productForm.patchValue(data);
    })
  }

  compareCategoryById(option: Category, model: Category): boolean {
    return option && model && option.id === model.id;
  }

  onSubmit() {
    this.productService.updateProduct({id:this.id,...this.productForm.value}).subscribe(()=>{
      this.router.navigate(['products']);
    })
 }  
}
