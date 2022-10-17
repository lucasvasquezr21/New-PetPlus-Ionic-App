import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinaria } from '../models/veterinaria';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {


  // eslint-disable-next-line @typescript-eslint/naming-convention
  Urlveti = 'http://127.0.0.1:8000/app_veterinaria/veterinaria/';

  constructor(private http : HttpClient) { }


  getVeterinarias(): Observable<Veterinaria[]>{
    return this.http.get<Veterinaria[]>(this.Urlveti);
  }


  getuno(nombre : string){
    return this.http.get<Veterinaria>(this.Urlveti + nombre)
  }

}
