import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { fromEvent, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private readonly platformId = inject(PLATFORM_ID);
  private isMobileSignal = signal<boolean>(false);

  isMobile = this.isMobileSignal.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'resize')
        .pipe(
          map(() => window.innerWidth),
          startWith(window.innerWidth)
        )
        .subscribe((width) => this.setIsMobile(width));
    }
  }

  currentWidth(): number {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth;
    }

    return 0;
  }

  setIsMobile(width: any): void {
    if (width < 768 && this.isMobile() !== true) {
      this.isMobileSignal.set(true);
    } else if (width >= 768 && this.isMobile() !== false) {
      this.isMobileSignal.set(false);
    }
  }
}
