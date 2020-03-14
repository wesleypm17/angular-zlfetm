import {Component} from '@angular/core';

//Decorador para trnsformar essas classes um componente...
@Component ({
    selector : 'app-main', //seletor HTML
    templateUrl : 'app.component.html', // HTML do componente
    styleUrls : [] // Folhas de estilo que estilizam o HTML.
})

export class AppComponent {

  // Atributo
  titulo: string;

  //Construtor da classe
  constructor(){
    this.titulo = "Tíítulo da minha aplicação"
  }
}