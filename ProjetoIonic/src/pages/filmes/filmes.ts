import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'; //
import { MoovieProvider } from '../../providers/moovie/moovie'; //Provedor importado
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [ //Adicionando provedor, no caso é o the movie db
    //Esse provider é adicionado apenas nessa página porque apenas ela que o utilizará
    //Se o provider tivesse que ser utilizado no app todo, basta declará-lo e importá-lo no app.component.ts
    MoovieProvider 
  ]
})
export class FilmesPage {
 
  //Variaveis
  //Declarando objeto com propriedades (JSON).
  public objeto_filmes = {
    titulo: "Nati do objeto",
    data: "Fevereiro 21, 2018",
    descricao: "Eu faço Informática Biomédica! <3",
    qntd_likes: 55,
    qntd_comment: 21,
    time_comment: "2 min ago"
  }
  public lista_filmes = new Array<any>(); //Declarando e instanciando um vetor de tipo qualquer(any)
  public loader;
  public refresher; //Variavel 
  public isRefreshing: boolean = false; //Variavel que armazena o estado do refresh, ou seja, se estão atualizando a página ou não.

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider, //Injetando o "provedor" na página.
    public loadingCtrl: LoadingController //Objeto para carregamento de página. (frufru)
    ) {
  }

  //Funções
  abreCarregando() { //Ativa a animação de carregamento.
    this.loader = this.loadingCtrl.create({ //Cria a animação
      content: "Carregando filmes...",
      //duration: 3000 //Duração da animação
    });
    this.loader.present(); //Executa a animação.
  }
  
  fechaCarregando() { //Desativa a animação de carregamento.
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher; 
    this.isRefreshing = true; //Estão atualizando a página.
    this.carregarFilmes(); //Carrega os filmes para atualizar a página.
    //Se quisesse um tempo pré-determinado para a animação de atualização da página basta escrever o código abaixo:
    /*
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete(); //Comando que encerra a animação da atualização da página.
    }, 2000); //Tempo em milisegundos que a animação ficará sendo executada.
    */
  }

  //Função que executa sempre que a página é carregada pela primeira vez.
  ionViewDidLoad() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    console.log("filme: " + filme);

    //Passando como paramêtro uma página e um objeto para esta página.
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id}); 
  }

  //Função que carrega os filmes.
  carregarFilmes(){
    //Antes de carregar os filmes, o frufru(animação de carregamento) é ativado.
  this.abreCarregando();
  
      //A função subscribe é do tipo observable, ou seja, ela fica aguardando uma resposta. Essa, por sua vez, depende da
      // velocidade de resposta da internet.
      //E após essa resposta ser recebida uma função é executada. 
      //Se ela for recebida com sucesso, a função data será executada.
      //Se ela não for recebida com sucesso, a função error será executada.
        this.movieProvider.getLatestMovies().subscribe(
  
        data=>{ //Isso é equivalente a declaração de uma função, onde data é um parâmetro.
          console.log("Teste 1, console.log(data):");
          console.log(data); 
          //data é a variável que recebe a informação do provedor.
          //Response é a variável data com tipo de qualquer coisa(any).
          //lista_filmes recebe o "results" (variável que vem no pacote de resposta do provedor que contém as informações sobre os filmes populares)
          const response = (data as any);
          this.lista_filmes = response.results; 
          console.log(response);
  
          this.fechaCarregando(); //Depois de carregar os filmes, o frufru(animação de carregamento) é desativado.
  
          //Após ter o carregamento dos dados, há a verificação se a página está sendo atualizada.
          // (p/ isso a variavel isRefreshing terá que ter passado pela função doRefresh() para ficar como true)
          if(this.isRefreshing){
            this.refresher.complete(); //Função que encerra a animação da atualização, pois a lista de filmes já foi carregada.  (a variável refresher passa do estado carregando para o completo)
            this.isRefreshing = false; //A atualização da página não está mais sendo executada.
          }
        },
        error=>{
          console.log(error);    
          
          this.fechaCarregando(); //Se der erro ao carregar os filmes, o frufru(animação de carregamento) é desativado.
  
          //Após ter o ERRO carregamento dos dados, há a verificação se a página está sendo atualizada.
          // (p/ isso a variavel isRefreshing terá que ter passado pela função doRefresh() para ficar como true)
          if(this.isRefreshing){
            this.refresher.complete(); //Função que encerra a animação da atualização, pois ao carregar a lista de filmes houve um erro.
            this.isRefreshing = false; //A atualização da página não está mais sendo executada.
          }
        }
      )
  }

}
