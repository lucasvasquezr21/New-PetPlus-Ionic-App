import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comuna } from '../models/comuna';
import { Veterinaria } from '../models/veterinaria';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {


  // eslint-disable-next-line @typescript-eslint/naming-convention
  Urlveti = 'http://api-petplus-duocuc.herokuapp.com/app_veterinaria/veterinaria/';
  URLcomuna:string="http://api-petplus-duocuc.herokuapp.com/app_comuna/comuna/"



  constructor(private http : HttpClient) { }


  getVeterinarias(): Observable<Veterinaria[]>{
    return this.http.get<Veterinaria[]>(this.Urlveti);
  };
  
  getuno(nombre : string){
    return this.http.get<Veterinaria>(this.Urlveti + nombre)
  };

  getComuna(): Observable<Comuna[]>{
    return this.http.get<Comuna[]>(this.URLcomuna)
  };
}
