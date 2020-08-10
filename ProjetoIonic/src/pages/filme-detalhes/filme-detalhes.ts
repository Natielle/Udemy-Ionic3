import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
})
export class FilmeDetalhesPage {

  //Variavel
  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider //Adicionando provider
  ) {
  }

  //Funções


  ionViewDidEnter() {
    //navParams.get pega o parâmetro com o nome "id" que foi enviado.
    this.filmeid = this.navParams.get("id"); 
    console.log("filmeid recebido: ", this.filmeid);
  }

}
