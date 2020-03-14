import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';

@NgModule ({
  declarations: [Comp1Component], // Componentes do móódulo...
  exports: [Comp1Component], // Componentes visííveis a outros móódulos...
  imports: [CommonModule] // Quais móódulos serãão importados
})

export class Func1Module{}