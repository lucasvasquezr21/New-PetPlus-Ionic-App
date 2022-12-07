import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procedimiento } from '../models/procedimiento';
import { Observable } from 'rxjs';
import { ConsulReserva } from '../models/consulreserva';

@Injectable({
    providedIn: 'root'
  })
  export class ProcedimientoService {

    URLconprocedimiento: string ='https://api-petplus-duocuc.herokuapp.com/app_consulta_procedimiento/consulta_procedimiento/'
    URLconsulreserva: string = 'https://api-petplus-duocuc.herokuapp.com/app_consulta_reserva/consulta_reserva/'

    constructor(private http : HttpClient) { }

    getconsuproce(): Observable<ConsulReserva[]>{
        return this.http.get<Procedimiento[]>(this.URLconprocedimiento)
      }

      getconsulreserva(consulreserva:string){
        return this.http.get<ConsulReserva[]>(this.URLconsulreserva + consulreserva)
      }
      

  }