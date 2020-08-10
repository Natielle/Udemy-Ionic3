import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesteProvider } from '../../providers/teste/teste'; //Importado;

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
  providers: [ //Adicionando provedor
    //Esse provider é adicionado apenas nessa página porque ela que o utilizará
    TesteProvider 
  ]
})
export class SobrePage {

  // Variáveis.
  fontSize: number = 1.5; //Valor padrão do tamanho da fonte em 'em'.
  backgroundColor: string = 'white'; //Valor padrão da cor de fundo.
  fontColor: string = 'black'; //Valor padrão da cor da fonte.

  // Funções.
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private testinho: TesteProvider, //Injetando o "provedor" na página.
  ) {

    //Atribuindo os valores salvos que mudarão o estilo assim que a tela for carregada.
    //JSON.parse -> Transforma a string json recebida em objeto, assim é possível acessar as propriedades do objeto.
    var temp = JSON.parse(this.testinho.getConfigData()); 

    this.fontSize = temp.tamanhoDoTexto;
    this.backgroundColor = temp.corDaFonte;
    this.fontColor = temp.corDeFundo;
    
  }
  
  alterarConfiguracao($valor: number){
    this.fontSize += $valor;
    this.testinho.setConfigData(this.fontSize, this.fontColor, this.backgroundColor); //Atualizando a nova info sobre o estilo no localstorage.
  }
  
  alterarFundo($corFundo: string, $corFonte: string){
    this.backgroundColor = $corFundo;
    this.fontColor = $corFonte;
    this.testinho.setConfigData(this.fontSize, this.fontColor, this.backgroundColor); //Atualizando a nova info sobre o estilo no localstorage.
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

}
