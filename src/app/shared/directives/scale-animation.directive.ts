import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[scaleAnimation]',
})
export class ScaleAnimationDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(element, 'w-11/12');
            this.renderer.addClass(element, 'w-full');
          } else {
            this.renderer.removeClass(element, 'w-full');
            this.renderer.addClass(element, 'w-11/12');
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
    }
  }
}
