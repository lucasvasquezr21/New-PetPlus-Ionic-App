import { Component, OnInit } from '@angular/core';
import { VeterinariasService } from '../veterinariasService/veterinarias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-veterinarias',
  templateUrl: './detalle-veterinarias.page.html',
  styleUrls: ['./detalle-veterinarias.page.scss'],
})
export class DetalleVeterinariasPage implements OnInit {
  
  private datos = {}
  
  constructor(private Servicio: VeterinariasService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( p => {
      this.datos = this.Servicio.getVeterinariasById( p.get('veterinariasID'))
      console.log(this.datos)
    })
  }

  
}
