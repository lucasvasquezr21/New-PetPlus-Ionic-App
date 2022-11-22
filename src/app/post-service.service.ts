import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostServiceProvider {

  url = 'https://api-petplus-duocuc.herokuapp.com/app_veterinaria/veterinaria/';

  constructor(public http: HttpClient) {

  }

  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

}