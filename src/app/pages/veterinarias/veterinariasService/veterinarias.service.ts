import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinariasService {
  
  private veterinarias = [
    {
      id:'1',
      nombre_vet:'CDVET',
      direccion: 'Av José Miguel Carrera 12668, El Bosque, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://cdvet.cl/wp-content/uploads/2020/11/cropped-CDVET-03.png",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "09:00",
      hora2: "18:00",
    },
    {
      id:'2',
      nombre_vet: 'Todo Animal',
      direccion: 'Av. Las Acacias 3052, San Bernardo, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhceonHA0rCTKdmuZfsScG9I4ZDawzIxEMBxuG6yBgrQTTR-9gLqUDCSstgwiwwzuhBM&usqp=CAU",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "08:30",
      hora2: "17:00",
    },
    {
      id:'3',
      nombre_vet:'Pokrant Valeri',
      direccion: 'Av. Lo blanco 261, El bosque, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=UGJ07P4UPVzf7MLc_WJqgg&cb_client=maps_sv.tactile.gps&w=650&h=320&yaw=198.9036&pitch=0&thumbfov=100",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "09:00",
      hora2: "17:30",
    },
    {
      id:'4',
      nombre_vet:'Clínica Veterinaria San Bernardo',
      direccion: 'Colón Sur 899, San Bernardo, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://scontent.fscl9-1.fna.fbcdn.net/v/t1.6435-9/75594463_141661970516422_7624851493513854976_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF2RrL04oJoIUcVfBouVjos4h81vp6BnmDiHzW-noGeYJF0N0UG1REVRt-glAIHY3Q2mtk1xRaAXCzQjke_wRW8&_nc_ohc=k579P6GfNTwAX_FZcGG&_nc_ht=scontent.fscl9-1.fna&oh=00_AfBbPbyRko8JF_0k2tpDGb51lEPCTz0tXcNQ06m4O2vo5Q&oe=63AF6F2B",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "08:00",
      hora2: "19:00",
    },
    {
      id:'5',
      nombre_vet:'Reino Animal',
      direccion: 'Pinto 124, San Bernardo, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-cLlpaFZZYb1MqYMKlsWgLH6xsZlk0wUt5p8uB3RWzUqzQm6on7GULF-FpTnTN2zCBk&usqp=CAU",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "00:00",
      hora2: "23:59",
    },
    {
      id:'6',
      nombre_vet:'Dogtor',
      direccion: 'Eyzaguirre 19, San Bernardo, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img:"https://media.cylex.cl/companies/1129/2454/logo/logo31545947.jpg",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "10:00",
      hora2: "19:00",

    },
    {
      id:'7',
      nombre_vet:'PetHappy',
      direccion: 'Eyzaguirre 307, San Bernardo, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://www.expomascotasyanimales.com/wp-content/uploads/2022/05/logo-pethappy.png",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "08:30",
      hora2: "17:00",
    },
    {
      id:'8',
      nombre_vet:'Tus Mascotas',
      direccion: 'Alcalde Eduardo Castillo Velasco 4890, Ñuñoa, RM',
      telefono: '4324324324',
      correo: 'vet@correo.cl',
      descripcion:'Atendemos todo tipo de mascotas',
      img: "https://www.tusmascotas.cl/wp-content/uploads/2020/09/LOGO-BL.png",
      horas: ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
      hora1: "09:00",
      hora2: "17:00",
    }
  ];

  // private veterinarias = https://api-petplus-duocuc.herokuapp.com/app_veterinaria/veterinaria/

  constructor() { }
  
  //listar
  getVeterinarias(){
    return [...this.veterinarias]
  }

  //buscar por id
  getVeterinariasById({ veterinariasID }: { veterinariasID: string; }){
    return {
      ...this.veterinarias.find(p => {
        return p.id = veterinariasID
      })
    }
  }
}
