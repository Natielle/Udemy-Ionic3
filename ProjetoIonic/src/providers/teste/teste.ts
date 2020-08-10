import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TesteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//Variável global. (Tem que declarar antes do "@Injectable")
let configTexto_key_name = "configuracaoTexto"; //Constante

@Injectable()//Notação que demonstra que essa classe será utilizada por outras classes.

//Provedores são distribuidores de informações.
export class TesteProvider {

  // -------------------------------- Funções --------------------------------
  // localStorage.getItem(key_name); //Obtem o valor-par da chave.
  // localStorage.setItem(key_name, value); //Insere o par chave-valor no localstorage.
  // localStorage.remove(key_name); //Remove o par chave-valor do localstorage.
  // localStorage.clear(); //Remove todos os par chave-valor do localstorage.
  // localStorage.length(); //Retorna a quantidade de chaves existentes no localstorage.

  constructor(public http: HttpClient) {
    console.log("Provider da configuracao do texto foi executado");
  }

  //Pega as configurações do localstorage.
  getConfigData(): any{ 
    //localStorage.getItem acessa o localstorage para ler informações. Essas informações lidas, estão em formato de texto.
    //console.log(localStorage.getItem(configTexto_key_name));
    return (localStorage.getItem(configTexto_key_name)); //Retornará null se for a primeira vez que o usuário instalar e entrar no app.
  }
  
  //Função que grava os dados no localstorage
  //Passagem obrigatória de parâmetros -> showSlide: boolean (variável que recebe o tipo boolean)
  //Passagem opcional de parâmetros -> username?: string (variável que recebe o tipo string)
  setConfigData(tamanhoDoTexto: number, corDeFundo: string, corDaFonte: string){ 
    // var é um tipo de variável que vale para o código todo. (Ela pode ser usada antes de ser declarada)
    //let é uma constante e um tipo de variável que é acessivel apenas em um bloco de código. É como se fosse uma variável local. (Ela NÃO pode ser usada antes de ser declarada)
    let configTextinho = { 
      tamanhoDoTexto: 0,
      corDaFonte: "",
      corDeFundo: ""
    }

    configTextinho.tamanhoDoTexto = tamanhoDoTexto;
    configTextinho.corDaFonte = corDaFonte;
    configTextinho.corDeFundo = corDeFundo;

    //localStorage.setItem acessa o localstorage para gravar informações. Essas informações gravadas, são salvas apenas em formato de texto.
    //Por isso o config( que é um array) é passado para o fomato de JSON e esse formato é convertido em string (stringfy)
    localStorage.setItem(configTexto_key_name, JSON.stringify(configTextinho));
    
    //localStorage.clear(); -> função que exclui os dados que estão salvas no localstorage (apaga tudo)
  }

  clearData(){
    localStorage.clear();
  }

}
