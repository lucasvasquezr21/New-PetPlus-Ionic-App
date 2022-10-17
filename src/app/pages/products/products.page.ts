import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostServiceProvider } from 'src/app/post-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  arrayPosts:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

  constructor(public navCtrl: NavController, public postServices:PostServiceProvider) {

  }
  ionViewDidLoad() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServices.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }
  ngOnInit() {
  }

}
