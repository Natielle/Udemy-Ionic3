import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TesteProvider } from './../../providers/teste/teste'; //Adicionando provider.


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private testezinho: TesteProvider //Adicionando no construtor
    ) 
  {
    //Toda vez que a página for carregada ela pega o estilo que foi salvo na configuracao
    
    //JSON.parse -> Transforma a string json recebida em objeto, assim é possível acessar as propriedades do objeto.
    var configuracao = JSON.parse(this.testezinho.getConfigData()); 

    console.log('Tema carregado: ' + configuracao.tema);
  }

  // Variáveis.
  shand = document.getElementsByClassName('texto') as HTMLCollectionOf<HTMLElement>;
  config = document.getElementsByClassName('zerada') as HTMLCollectionOf<HTMLElement>;

  // Funções.
  alteraTema($corFundo: string, $corFonte: string){
    this.config[0].style.backgroundColor = $corFundo;
    this.config[0].style.color = $corFundo;
    this.config[0].className += " light-theme";
    //Dar um set no localstorage para atualizar o tema escolhido.
    
  }

  alteraTexto($corFonte: string, $tamFonte){
    if (this.shand.length != 0) {
      this.shand[0].style.color = $corFonte;
    this.shand[0].style.fontSize = $tamFonte + 'px';
    }

    //this.shand[0].className = this.shand[0].className.replace("", "");

  }

  configurar(){

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
