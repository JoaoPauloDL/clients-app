import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Cliente } from './clientes/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/clientes`;
  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }
  
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl)
  }

  getClienteById(id: number) : Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url)
  }

}
