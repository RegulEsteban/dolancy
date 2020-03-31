import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollPoint]'
})
export class ScrollPointDirective {
  @Input() scrollPoint: number;
  constructor(
    private render: Renderer2,
    private el: ElementRef) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.scrollPoint) {
      this.render.addClass(this.el.nativeElement, 'affix');
      this.render.removeClass(this.el.nativeElement, 'mt-5');
      this.render.addClass(this.el.nativeElement, 'navbar-dark');
    } else {
      this.render.removeClass(this.el.nativeElement, 'affix');
      this.render.addClass(this.el.nativeElement, 'mt-5');
      this.render.removeClass(this.el.nativeElement, 'navbar-dark');
    }
  }
}
