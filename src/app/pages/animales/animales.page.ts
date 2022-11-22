import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animalservice/animal.service';
import { Animal } from './models/animal';
import { Color } from './models/color';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  public animal: Array<any> = [];
  public color: Array<any> = [];

  //Variable con la cual realizamos el filtro por ID
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public buscar_input = '';



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


  constructor(private serviceanimal: AnimalService) {}

  ngOnInit():void {
  }

  //------------------------------- TESTEO ------------------------------------ 
  ListAnimal() {
    this.serviceanimal.getAnimal().subscribe((result: Animal[]) => {
      console.log(result);
      this.color = result;

    });

  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ListColor(): void {
    this.serviceanimal.getColor().subscribe((result: Color[]) => {
      console.log(result);
      this.animal = result;
    });

  }
  //---------------------------------- FIN TESTEO -------------------------------
  //nuno hace referencia al nombre de la variable que almacena la data
  public buscar() {
    this.serviceanimal.getuno(this.buscar_input).subscribe((nuno: any) => {
      console.log(nuno);

      //Datos propios del array list
      this.n_ficha = nuno.animales.id_animal;
      this.nombreA = nuno.animales.nombre;
      this.n_microchip = nuno.animales.n_microchip;

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

}
