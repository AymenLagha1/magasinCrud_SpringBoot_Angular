import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  getAllClients() : Observable<Client[]>{
    return this.httpClient.get<Client[]>('/api/client/all');
  }
  createClient(client : Client):Observable<Client>{
    return this.httpClient.post<Client>("/api/client/create",client);
  }
  updateClient(client : Client):Observable<Client>{
    return this.httpClient.put<Client>("/api/client/update",client);
  }
  fetchClientById(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`/api/client/${id}`);
  }
  deleteClientById(id : number):Observable<String>{
    return this.httpClient.delete<String>("/api/client/delete/"+id);
  }
}



