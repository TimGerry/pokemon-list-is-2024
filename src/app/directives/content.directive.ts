import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appContent]',
  standalone: true
})
export class ContentDirective implements OnInit {

  @Input() appContent!: string;
  @Output() appContentChange = new EventEmitter<string>();

  #el: HTMLElement;

  constructor(private elRef: ElementRef) { 
    this.#el = elRef.nativeElement;
  }

  ngOnInit(): void {
    this.#el.contentEditable = 'true';
    this.#el.innerText = this.appContent;
  }

  @HostListener('input')
  onInput() {
    this.appContent = this.#el.innerText;
    this.appContentChange.emit(this.appContent);
  }
}
