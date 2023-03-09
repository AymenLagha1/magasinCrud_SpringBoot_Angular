import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientForm:FormGroup ;

  constructor(private fb:FormBuilder,private activatedRoute: ActivatedRoute,private clientService : ClientService,private router : Router) {  
    this.clientForm = this.fb.group({
      id :[],
      firstName :['',Validators.required],
      lastName:['',Validators.required],
    })
   }

  ngOnInit(): void {
    const clientID = this.activatedRoute.snapshot.params['id'];
    if (clientID){
      this.clientService.fetchClientById(clientID).subscribe((client)=>{
        this.clientForm.patchValue(client)
      })
    }
  }
  
  onSubmit(){
    this.clientService.createClient(this.clientForm.value).subscribe(()=>{
      this.router.navigate(['clients']);
    })
  }
}
