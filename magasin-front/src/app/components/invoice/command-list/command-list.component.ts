import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Command } from 'src/app/models/Command';
import { CommandService } from 'src/app/services/command.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  dataSource: MatTableDataSource<Command> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'client', 'date','amount','actions'];
  constructor(private commandService : CommandService) {}

  ngOnInit(): void {
    this.getAllCommands();
  }
  
  getAllCommands(){
    this.commandService.getAllCommands().subscribe((res)=>{
      this.dataSource.data = res;
    })
  }
  trackById(index: number, item: Command) {
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
          this.commandService.deleteCommandById(id).subscribe(()=>{
            this.getAllCommands();
          },(e)=>console.log(e))
        }
        
      }
    })
  }

}
