import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary·') private isHovering: boolean = false

  @Input() config: Object = {
    querySelector: '.card-text'
  }

  constructor (private el: ElementRef,
               private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'background-color', 'gray')
  }

  @HostListener('mouseover') onMouseOver() {
    let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector)
    this.renderer.setElementStyle(punchlineEl, 'display', 'block')
    this.isHovering = true
  }

  @HostListener('mouseout') onMouseOut() {
    let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector)
    this.renderer.setElementStyle(punchlineEl, 'display', 'none')
    this.isHovering = false
  }
}
