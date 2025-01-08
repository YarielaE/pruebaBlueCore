import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TUsuarios } from '../interface/tusuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServService {

  httpClient = inject(HttpClient);

  constructor() { }

  getUsuarios(): Observable<TUsuarios[]>{
    return this.httpClient.get<TUsuarios[]>(`${environment.baseURL}`)
  }

  getDetalle(id: string): Observable<TUsuarios>{
    return this.httpClient.get<TUsuarios>(`${environment.baseURL}/${id}`)
  }
}
