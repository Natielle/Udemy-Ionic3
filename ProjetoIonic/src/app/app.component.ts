import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro'; //Pagina importada
import { ConfigProvider } from '../providers/config/config'; //Provider importado
import { TesteProvider } from '../providers/teste/teste'; //Provider importado

import {ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'app.html',
  providers: [ //Adicionando o provider do localstorage.
    //Esse provider é adiciona aqui porque ele será utilizado no app todo, e não apenas em uma página. 
    ConfigProvider,
    //Esse provider é adiciona aqui porque ele será utilizado no app todo, e não apenas em uma página. 
    TesteProvider
  ]
})
export class MyApp {
  //rootPage:any = IntroPage; //Colocando a página de intro como 1° página a ser executada no app.
  rootPage:any; //Não tem nenhuma página ainda porque a 1° página depende se o usuário já passou pelo slide ou não.

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider, //Adicionando o provider como componente que precisa ser inicializado assim que o app for executado.
    testeProvider: TesteProvider //Adicionando o provider como componente que precisa ser inicializado assim que o app for executado.
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getConfigData(); //Constante que recebe a configuração do localstorage. (Não precisa usar o this porque está no próprio construtor)
      
      //Se for a 1° vez que o usuário entrar no app
      if(config == null){
        this.rootPage = IntroPage; //1° página carregada é o slide.
        configProvider.setConfigData(false);
      }
      else{
        //A 1° página carregada é a tabs, pois a pessoa já viu o slide então ela não precisa ver toda vez que ela abrir o app.
        this.rootPage = TabsPage;
      }
      console.log(config);

      // --------------------- parte de teste -------------------------
      //testeProvider.clearData(); //Limpando para zerar toda vez que o programa for executado. (Apenas para testar)
      let testinho = testeProvider.getConfigData();
      console.log("Provider do teste: - Informações nao gravadas");
      console.log(testinho);

      testeProvider.setConfigData(32, "yellow", "green");
      console.log("Provider do teste- Informações gravadas: ");
      testinho = testeProvider.getConfigData();
      console.log(testinho);

      testeProvider.setConfigData(22,  "blue", "red");
      console.log("Provider do teste- Informações gravadas 2° vez: ");
      testinho = testeProvider.getConfigData();
      console.log(testinho);

      // tentando mudar o estilo
      console.log('');
      console.log('TESTE DE ESTILO: ');
      console.log('');


      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }


}
