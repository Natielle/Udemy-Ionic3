import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { FeedPage } from '../feed/feed'; //Pagina importada.
import { FilmesPage } from '../filmes/filmes'; //Pagina importada.
import { ConfiguracoesPage } from '../configuracoes/configuracoes'; //Pagina importada.

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmesPage; // Após colocar o nome da classe que está no arquivo filmes.ts é necessário importar a classe.
  tab4Root = FeedPage; // Após colocar o nome da classe que está no arquivo feed.ts é necessário importar a classe.
  tab5Root = ConfiguracoesPage; // Após colocar o nome da classe que está no arquivo configuracoee.ts é necessário importar a classe.
  constructor() {

  }
}
