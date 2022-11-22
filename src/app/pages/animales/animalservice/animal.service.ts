import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { Color } from '../models/color';
import { Dueno } from '../models/dueno';
import { Especie } from '../models/especie';
import { Estado } from '../models/estado';
import { Raza } from '../models/raza';
import { Sexo } from '../models/sexo';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  
  URLAnimal :  string = 'https://api-petplus-duocuc.herokuapp.com/app_animal/animal/';
  URLcolor : string = "https://api-petplus-duocuc.herokuapp.com/app_color/color/";
  URLsexo : string = "https://api-petplus-duocuc.herokuapp.com/app_sexo/sexo/";
  URLespecie :string = "https://api-petplus-duocuc.herokuapp.com/app_especie/especie/";
  URLraza:string="https://api-petplus-duocuc.herokuapp.com/app_raza/raza/";
  URLestado:string="https://api-petplus-duocuc.herokuapp.com/app_estado/estado/";
  URLdueno:string="https://api-petplus-duocuc.herokuapp.com/app_dueno/dueno/"

  constructor(private http : HttpClient) { }

  getAnimal(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.URLAnimal);

  }
  getColor(): Observable<Color[]>{
    return this.http.get<Color[]>(this.URLcolor)
  }

  getuno(nombre : string){
    return this.http.get<Animal>(this.URLAnimal + nombre)
  }
  
  getcolor(color : string){
    return this.http.get<Color>(this.URLcolor + color)
  }

  getsexo(sexo : string){
    return this.http.get<Sexo>(this.URLsexo + sexo)
  }
  
  getespecie(especie :string){
    return this.http.get<Especie>(this.URLespecie + especie)
  }

  getreza(raza :string){
    return this.http.get<Raza>(this.URLraza + raza)
  }

  getestado(estado : string){
    return this.http.get<Estado>(this.URLestado + estado)
  }

  getdueno(dueno:string){
    return this.http.get<Dueno>(this.URLdueno + dueno)
  }

}
