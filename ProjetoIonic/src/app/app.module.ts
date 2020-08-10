import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Procura arquivos .ts, por isso no precisa colocar a extensão ".../about/about.ts"
// o ".." antes do "/" significa que está voltando uma pasta no diretório. Ex: Se estou na pasta app e dou um ../, então estarei na pasta src.

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module'; //Pagina importada
import { IntroPageModule } from '../pages/intro/intro.module'; //Pagina importada
import { FilmesPageModule } from '../pages/filmes/filmes.module'; //Pagina importada
import {HttpModule} from '@angular/http'; //"Auxiliar" de provedor importado
import { HttpClientModule } from '@angular/common/http'; //"Auxiliar" de provedor importado
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module'; //Pagina importada 
import { SobrePageModule } from '../pages/sobre/sobre.module'; //Pagina importada
import { PerfilPageModule } from '../pages/perfil/perfil.module'; //Pagina importada
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { TesteProvider } from '../providers/teste/teste';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],

  // Para adicionar alguma página ao projeto, é necessário colocar ela dentro do "imports:[]""
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule, //Pagina adicionada
    IntroPageModule, //Pagina adicionada
    FilmesPageModule, //Pagina adicionada
    HttpModule, //"Auxiliar" de provedor adicionado
    HttpClientModule, //"Auxiliar" de provedor adicionado
    ConfiguracoesPageModule, //Pagina adicionada
    SobrePageModule, //Pagina adicionada
    PerfilPageModule, //Pagina adicionada
    FilmeDetalhesPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TesteProvider
  ]
})
export class AppModule {}
