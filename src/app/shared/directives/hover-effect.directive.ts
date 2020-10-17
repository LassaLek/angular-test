import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})

export class HoverEffectDirective {
  private el: HTMLElement;

  @HostListener('mouseenter')
  onMouseEnter() {
    let editorButton = this.el.querySelector('.btn-je');
    editorButton.classList.add("hover");    
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    let editorButton = this.el.querySelector('.btn-je');
    editorButton.classList.remove("hover");
  }

  constructor(el: ElementRef) { 
    this.el = el.nativeElement; 
  }

}

