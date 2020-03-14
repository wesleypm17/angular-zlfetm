import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { MeuComponente1Component} from './meucomponente1/meucomponente1.component';
import { MeuBotao1Component} from './meucomponente1/meubotao1.component';
import { Func1Module} from './func1/func1.module'; // importa o móódulo de funcionalidades
import { FormsModule} from '@angular/forms';

//Tornar a classe um módulo do angular
@NgModule({
  imports : [BrowserModule, Func1Module,FormsModule],  // Outros Módulos usados
  exports: [],   //Vou exportar (tornar visível) um componente, pipe...
  providers: [], // É o conjunto de serviços que estarão disponíveis para este módulo...
  declarations: [AppComponent, MeuComponente1Component, MeuBotao1Component], // É o conjunto de componentes do modulo.
  bootstrap: [AppComponent] //É o conjunto de componentes pelo qual a aplicação Web vai iniciar a execução
})

export class AppModule {
}