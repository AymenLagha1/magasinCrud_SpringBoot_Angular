import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../models/Command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private httpClient:HttpClient) { }

  createCommand(command : Command):Observable<Command>{
    return this.httpClient.post<Command>("/api/command/create",command);
  }
  getAllCommands():Observable<Command[]>{
    return this.httpClient.get<Command[]>("/api/command/all");
  }
  deleteCommandById(id : number):Observable<String>{
    return this.httpClient.delete<String>("/api/command/delete/"+id);
  }
}
