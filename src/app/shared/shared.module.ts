import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealButtonComponent } from './components/reveal-button/reveal-button.component';
import { HoverEffectDirective } from './directives/hover-effect.directive';



@NgModule({
  declarations: [RevealButtonComponent, HoverEffectDirective],
  exports: [
    RevealButtonComponent,
    HoverEffectDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
