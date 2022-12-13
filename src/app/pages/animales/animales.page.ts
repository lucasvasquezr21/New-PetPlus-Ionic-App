import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animalservice/animal.service';
import { ProcedimientoService } from './animalservice/procedimiento.service';
import { Animal } from './models/animal';
import { Color } from './models/color';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
// import { ConsulReserva } from './models/consulreserva';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage {

  visible:boolean = false
  
  consulreservas: any[] = [];

  public animal: Array<any> = [];
  public color: Array<any> = [];

  //Variable con la cual realizamos el filtro por ID
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public buscar_input = '';
  public buscar_input1 = '';

  //Obtener segunda clave
  public idconsulreserva = ''
  public numeroconsulreserva = this.idconsulreserva;
  public nombre_consulreserva = '';
  

  //Obtener color
  public idcolor = '';
  public numero = this.idcolor;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public nombre_color = '';

  //Obtener sexo
  public idsexo = '';
  public numerosexo = this.idsexo;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public nombre_sexo = '';

  //Obetener la especie
  public idespecie = '';
  public numeroespecie = this.idespecie;
  public nombreespecie = '';

  //Obtener la raza
  public idraza = '';
  public numeroraza = this.idraza;
  public nombreraza = '';


  //Obtener el estado
  public idestado = '';
  public numeroestado = this.idestado;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public nombre_estado = '';


  //Obtener el dueno
  public iddueno: string = "";
  public numerodueno = this.iddueno;
  public nombre_dueno: string = "";

  //Variable de los atributos del animal
  public n_ficha: number = 0;
  public nombreA: string = "";
  public n_microchip: string = "";
  public raza: string = "";
  public fecha_nac: string = "";
  

  //Variabñe de los atributos de procedimienti
  public id_consulta_procedimiento: number = 0;
  public observaciones:string = "";
  public motivo_consulta:string = "";
  public peso:number = 0;
  public fecha_pro:string = "";

  
  constructor(private serviceanimal: AnimalService, private loadingCtrl: LoadingController, private serviceprocedimiento: ProcedimientoService,) {}

  dtoptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();


  async showLoading() {

    this.visible = !this.visible
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }

  public segundalist:any

  ionViewWillEnter() {

    this.dtoptions={
      pagingType:'simple_numbers'
    };

    this.serviceprocedimiento.getconsuproce().subscribe((nuno11:any)=>{
      this.segundalist = nuno11.consulta_procedimientos
      // console.log(this.segundalist)
      this.dtTrigger.next(null);
    })

    // this.serviceprocedimiento.getConsulreservas()
    // .subscribe( (consulreservas:any)  =>{
    //   console.log(consulreservas.);
    //   this.consulreservas = consulreservas;
    // } );

  }

search( event ){

}


  //------------------------------- TESTEO ------------------------------------ 
  ListAnimal() {
    this.serviceanimal.getAnimal().subscribe((result: Animal[]) => {
      // console.log(result);
      this.color = result;
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ListColor(): void {
    this.serviceanimal.getColor().subscribe((result: Color[]) => {
      // console.log(result);
      this.animal = result;
    });
  }
  //---------------------------------- FIN TESTEO -------------------------------
  //nuno hace referencia al nombre de la variable que almacena la data

  // public buscarPro(){
  //   this.serviceprocedimiento.getconsuproce(this.buscar_input1).subscribe((nuno:any) => {
  //     this.n_ficha = nuno.animales.id_animal;
  //     this.nombreA = nuno.animales.nombre;
  //     this.n_microchip = nuno.animales.n_microchip;
  //   })

  // }

  public buscarproc(){
    this.serviceprocedimiento.getconsuproce().subscribe((nuno11:any)=>{
        // console.log(nuno11);
        this.id_consulta_procedimiento = nuno11.procedimientos.id_consulta_procedimiento;
        this.observaciones = nuno11.procedimientos.observaciones;
        this.motivo_consulta = nuno11.procedimientos.motivo_consulta;
        this.peso = nuno11.procedimientos.motivo_consulta;
        this.fecha_pro = nuno11.procedimientos.fecha_pro;
        this.idconsulreserva = nuno11.procedimientos.consulta_reserva_id_consulta_reserva_id;
        this.numeroconsulreserva = this.idconsulreserva;
        this.buscarconsulreserva();
    })
  }

  public buscar() {
    this.serviceanimal.getuno(this.buscar_input).subscribe((nuno: any) => {
      // console.log(nuno);

      //Datos propios del array list
      this.n_ficha = nuno.animales.id_animal;
      this.nombreA = nuno.animales.nombre;
      this.n_microchip = nuno.animales.n_microchip;
      this.fecha_nac = nuno.animales.fecha_nac;

      //Datos que se obtienen gracias a las foraenas en la BD
      this.idsexo = nuno.animales.sexo_id_sexo_id;
      this.idcolor = nuno.animales.color_id_color_id;
      this.idespecie = nuno.animales.especie_id_especie_id;
      this.idestado = nuno.animales.estado_id_estado_id;
      this.iddueno = nuno.animales.dueno_id_dueno_id;

      //Almaceno la informaicon de la id en una variable
      this.numero = this.idcolor;
      this.numerosexo = this.idsexo;
      this.numeroespecie = this.idespecie;
      this.numeroestado = this.idestado;
      this.numerodueno = this.iddueno;

      //Ejecuto las funciones al mismo tiempo que busco el animal
      this.buscarcolor();
      this.buscarsexo();
      this.buscarespecie();
      this.buscarestado();
      this.buscardueno();
    });
  }

  //Busco los atributos del animal por separado
  public buscarcolor() {
    this.serviceanimal.getcolor(this.numero).subscribe((nuno1: any) => {
      this.nombre_color = nuno1.colores.color;
    });
  }

  public buscarsexo() {
    this.serviceanimal.getsexo(this.numerosexo).subscribe((nuno2: any) => {
      this.nombre_sexo = nuno2.sexos.sexo;
    });
  }

  public buscarespecie() {
    this.serviceanimal.getespecie(this.numeroespecie).subscribe((nuno3: any) => {
      this.nombreespecie = nuno3.especies.nombre_especie;

    });
  }

  public buscarestado() {
    this.serviceanimal.getestado(this.numeroestado).subscribe((nuno4: any) => {
      this.nombre_estado = nuno4.estados.estado;

    });
  }

  public buscardueno() {
    this.serviceanimal.getdueno(this.numerodueno).subscribe((nuno5: any) => {
      this.nombre_dueno = nuno5.dueno.nombre_completo;
    });
  }

  public buscarconsulreserva() {
    this.serviceprocedimiento.getconsulreserva(this.numeroconsulreserva).subscribe((nuno11: any) => {
      this.nombre_consulreserva = nuno11.procedimientos.consulreserva;
    });
  }

}
