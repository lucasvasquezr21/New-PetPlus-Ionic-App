import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { VeterinariasService } from './veterinariasService/veterinarias.service';
 

@Component({
  selector: 'app-veterinarias',
  templateUrl: './veterinarias.page.html',
  styleUrls: ['./veterinarias.page.scss'],
})
export class VeterinariasPage implements OnInit {


  filterTerm='';

  constructor(private Servicio: VeterinariasService, private loadingCtrl: LoadingController){}

  public veterinarias = []

  async showLoading() {

    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 600,
      spinner: 'circles',
    });

    loading.present();
  }

  ngOnInit() {
    this.showLoading()
    this.veterinarias = this.Servicio.getVeterinarias()
  };


  ionViewWillEnter(){
    this.veterinarias = this.Servicio.getVeterinarias()
  }

  

  

  // constructor(private servicesveti: VeterinariaService) { }

  // public veterinarias: Array<any> = [];

  // ngOnInit():void {
  //   this.Listveti();
  //   this.servicesveti.getVeterinarias().subscribe(v => this.todas= v);

  // }

  // public todas: Array<any> = [];

  // public buscar_input='';

  // Listveti(){
  //   this.servicesveti.getVeterinarias().subscribe((result: any)=>{

  //     this.todas = result.veterinarias

  //     console.log(this.todas);
  //   });
  // }

  // buscar(){
  //   this.servicesveti.getuno(this.buscar_input).subscribe((data: any)=>{
  //     console.log(data);
  //   });
  // }

}

