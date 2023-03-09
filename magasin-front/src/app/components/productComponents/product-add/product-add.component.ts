import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  categories?: Category[];
  selectedFiles:any;

  productForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    category: new FormControl(null,[Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    image: new FormControl(),
  });

  constructor(private categoryService : CategoryService,private productService : ProductService,private router : Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories = res;
    });
  }
  saveProduct():void{;
    this.productService.createProduct(this.productForm.value).subscribe(
      ()=>{this.router.navigate(['/products'])}
      );
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
}

}
