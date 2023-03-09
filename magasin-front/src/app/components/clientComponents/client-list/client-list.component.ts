import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  dataSource: MatTableDataSource<Client> = new MatTableDataSource();
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'cc'];
  
  constructor(private clientService : ClientService) {}
  
  ngOnInit(): void {this.getAllClients();}
  
  getAllClients(){
    this.clientService.getAllClients().subscribe((res)=>{
      this.dataSource.data = res;
    })
  }


  trackById(index: number, item: Client) {
    return item.id;
  }
  delete(id:number){
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
        if(id){
          this.clientService.deleteClientById(id).subscribe(()=>{
            this.getAllClients();
          },(e)=>console.log(e))
        }
        
      }
    })
  }

}
