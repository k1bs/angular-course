import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary·') private isHovering: boolean = false

  constructor (private el: ElementRef,
               private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'background-color', 'gray')
  }

  @HostListener('mouseover') onMouseOver() {
    let punchlineEl = this.el.nativeElement.querySelector('.card-text')
    this.renderer.setElementStyle(punchlineEl, 'display', 'block')
    this.isHovering = true
  }

  @HostListener('mouseout') onMouseOut() {
    let punchlineEl = this.el.nativeElement.querySelector('.card-text')
    this.renderer.setElementStyle(punchlineEl, 'display', 'none')
    this.isHovering = false
  }
}
