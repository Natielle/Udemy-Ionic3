import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil'; //Pagina importada.
import { SobrePage } from '../sobre/sobre'; //Pagina importada.

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  //Declarando variável.
  rootPage = PerfilPage; //Define qual será a página que será aberta

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  //Funcoes
  abrirPerfil(){ //Função que abre a página perfil.
    this.navCtrl.push(PerfilPage);
  }

  abrirSobre(){ //Função que abre a página sobre.
    this.navCtrl.push(SobrePage);
  }


}
