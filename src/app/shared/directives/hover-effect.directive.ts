import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  private el: HTMLElement;

  @HostListener('mouseenter')
  onMouseEnter() {
    //TODO změnit stylování elementu, možno přímo úpravou stylů či například měněním classy
    this.el.style.backgroundColor = '#a83246';
    this.el.style.color = 'black'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    //TODO změnit stylování elementu, možno přímo úpravou stylů či například měněním classy
    this.el.style.backgroundColor = '#1976d2';
    this.el.style.color = 'white'
  }


  constructor(el: ElementRef) { this.el = el.nativeElement; }

}
