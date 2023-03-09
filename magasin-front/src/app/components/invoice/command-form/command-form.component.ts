import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { Command } from 'src/app/models/Command';
import { CommandLine } from 'src/app/models/CommandLine';
import { Product } from 'src/app/models/Product';
import { ClientService } from 'src/app/services/client.service';
import { CommandService } from 'src/app/services/command.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.css']
})
export class CommandFormComponent implements OnInit {


  command?:Command;
  commandForm:FormGroup ;
  products:Product[]=[];
  clients:Client[]=[];


    constructor(private router : Router,private productService:ProductService,private fb:FormBuilder,private commandService:CommandService,private clientService:ClientService) {
      this.commandForm = this.fb.group({
        client :['',Validators.required],
        commandLines:this.fb.array([]),
        amount :[0],
        date :[Validators.required]
      })
     }
  
    ngOnInit(): void {
      this.productService.getAllProducts().subscribe(res=>{
        this.products=res;
      })
      this.clientService.getAllClients().subscribe(res=>{this.clients=res});
    }

    get commandLines(){
      return this.commandForm.controls["commandLines"] as FormArray;
    }
  
    productChanged(index:number){
      const formArray = this.commandLines;
      const formControl = this.commandLines.at(index) as FormControl;
      const product = formControl.value.product;
      formArray.controls[index].patchValue({unitAmount:product.price,amount:product.price*formControl.value.quantity});
      this.commandForm.patchValue({amount:this.calculateTotalAmount()});
    }
    private calculateTotalAmount() : number {
      let amount = 0;
      this.commandLines.value.forEach((element: any) => {
        amount+=(element.product.price*element.quantity);
      });
      console.log(amount);
      return amount;
     
    }
  
    addCommandLine() {
      const commandLineForm = this.fb.group({
        product: [null, Validators.required],
        unitAmount: [],
        quantity: [ Validators.required],
        amount: [0,Validators.required]
        });
      this.commandLines.push(commandLineForm);
    }
  
    removeCommandLine(commandLineIndex: number) {
      this.commandLines.removeAt(commandLineIndex);
    }
    onSubmit() {
      let amount =0;
      let commandLines: CommandLine[] = this.commandForm.value.commandLines;
      commandLines.forEach(commandLine=>{
        commandLine.amount?amount+=commandLine.amount:0;
      })
      this.commandForm.patchValue({amount:amount});
      this.commandService.createCommand(this.commandForm.value).subscribe(
        res=>this.router.navigate(['/commandes']),
        err=>{
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
          })
        }
      )
    }
}


