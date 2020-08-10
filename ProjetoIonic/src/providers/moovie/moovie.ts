import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() //Notação que demonstra que essa classe será utilizada por outras classes.

//Provedores são distribuidores de informações.
export class MoovieProvider {

  //Declarando variáveis
  private baseApiPath = "https://api.themoviedb.org/3"; //Caminho base de onde vai buscar informações.

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  // Funções

  getLatestMovies(){
    return this.http.get( this.baseApiPath + "/movie/popular?api_key=11a993a416bb2dd1bdc2a8318b3c85e4"); //Busca a informação em um endereço.
  }

  getMovieDetails(filmeid){
    return this.http.get( this.baseApiPath + '/movie/${filmeid}?api_key=11a993a416bb2dd1bdc2a8318b3c85e4'); //Busca a informação em um endereço.
  }

}
