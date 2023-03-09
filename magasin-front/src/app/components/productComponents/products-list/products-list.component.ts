import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
 

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  
  displayedColumns: string[] = ['id', 'name', 'description', 'category','quantity','price','actions'];

  constructor(private productService:ProductService,private router : Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  private getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  trackByProductId(index:number,item:Product){
    return item.id;
  }

  delete(productId : number) {
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
        if (productId){
          this.productService.deleteProductById(productId).subscribe(()=>{
           this.getAllProducts()
          },(e)=>console.log(e))
        }
        
      }
    })
  }
  

}
