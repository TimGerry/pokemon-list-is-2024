import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  @Input('appHover') color?: string

  #nativeEl: HTMLElement;

  constructor(private elRef: ElementRef) { 
    this.#nativeEl = elRef.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.#nativeEl.style.backgroundColor = this.color ?? 'grey';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.#nativeEl.style.backgroundColor = '';
  }

}
