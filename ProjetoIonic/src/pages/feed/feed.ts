import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //Declarando variáveis.
  public nome_usuario:string = "Nati do codigo"; //Variável do tipo string.
  public variavel = "Conteudo"; //As variáveis em .ts(typescript) podem não ter tipo, como no .js(javascript) por exemplo.
  public var1:number = 23; //Variável do tipo número.
  public var2:any; //Variável que aceita qualquer tipo.

  //Declarando objeto com propriedades (JSON).
  public objeto_feed = {
    titulo: "Nati do objeto",
    data: "Fevereiro 21, 2018",
    descricao: "Eu faço Informática Biomédica! <3",
    qntd_likes: 55,
    qntd_comment: 21,
    time_comment: "2 min ago"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ------------------- Funções -------------------
  public somaDoisNumeros1(): void{ //Função que não retorna nada (tipo void) e que não tem parâmetros.
    alert("A função funcionou. 5 + 10 = " + (5+10));
  }

  public somaDoisNumeros2(num1: number, num2: number): void{ //Função que não retorna nada (tipo void) e que tem parâmetros.
    alert("A soma eh: " + (num1+num2) );
  }

  public somaDoisNumeros3():number{ //Se a função tem um tipo, obrigatoriamente ela precisa retornar um valor.
    return;
  }

  //Função que executa sempre que a página é carregada pela primeira vez.
  ionViewDidLoad() { 
    //console.log('ionViewDidLoad FeedPage');

    this.somaDoisNumeros1(); //Chama a função pra ser executada.
    this.somaDoisNumeros2(2,4);
  }

}
