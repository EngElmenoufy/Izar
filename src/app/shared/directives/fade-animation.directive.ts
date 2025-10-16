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
  selector: '[fadeAnimation]',
})
export class FadeAnimationDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(element, 'translate-y-8');
            this.renderer.addClass(element, 'translate-y-0');
            this.renderer.removeClass(element, 'opacity-0');
            this.renderer.addClass(element, 'opacity-100');
          }
        },
        { threshold: 0.05 }
      );

      observer.observe(element);
    }
  }
}
