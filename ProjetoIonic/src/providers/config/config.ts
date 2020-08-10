import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//Variável global. (Tem que declarar antes do "@Injectable")
let config_key_name = "config"; //Constante

@Injectable() //Notação que demonstra que essa classe será utilizada por outras classes.

//Provedores são distribuidores de informações.
export class ConfigProvider {

  //Declarando variáveis.
  private config = { //Array
    showSlide: false,
    username: "",
    name: ""
  }

  constructor() {
  }

  // Funções
  getConfigData(): any{ //Pega as configurações do localstorage.

    //localStorage.getItem acessa o localstorage para ler informações. Essas informações lidas, estão em formato de texto.
    return (localStorage.getItem(config_key_name)); //Retornará null se for a primeira vez que o usuário instalar e entrar no app.
    
    //Um jeito de fazer um "if" dentro do return:
    //Se localStorage.getItem for null, irá retornar um objeto vazio ({})
    //return (localStorage.getItem(config_key_name) || {});  // || é como se fosse um if dentro do return.
  }

  //Função que grava os dados no localstorage
  //Passagem obrigatória de parâmetros -> showSlide: boolean (variável que recebe o tipo boolean)
  //Passagem opcional de parâmetros -> username?: string (variável que recebe o tipo string)
  setConfigData(showSlide?: boolean, username?: string, name?: string){ 
    // var é um tipo de variável que vale para o código todo. (Ela pode ser usada antes de ser declarada)
    //let é uma constante e um tipo de variável que é acessivel apenas em um bloco de código. É como se fosse uma variável local. (Ela NÃO pode ser usada antes de ser declarada)
    let config = { 
      showSlide: false,
      username: "",
      name: ""
    }

    if(showSlide){ //Se receber a variável name, há a gravação da informação que foi enviada.
      config.showSlide = showSlide;
    }

    if(username){ //Se receber a variável name, há a gravação da informação que foi enviada.
      config.username = username;
    }
    
    if(name){ //Se receber a variável name, há a gravação da informação que foi enviada.
      config.name = name;
    }

    //localStorage.setItem acessa o localstorage para gravar informações. Essas informações gravadas, são salvas apenas em formato de texto.
    //Por isso o config( que é um array) é passado para o fomato de JSON e esse formato é convertido em string (stringfy)
    localStorage.setItem(config_key_name, JSON.stringify(config));

    //localStorage.clear(); -> função que exclui os dados que estão salvas no localstorage (apaga tudo)

  }

}
