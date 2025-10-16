import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-slider',
  imports: [RouterLink, IconsComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements AfterViewInit {
  el = viewChild<ElementRef>('slider');
  renderer = inject(Renderer2);

  isBtnLeftDisabled = signal(true);
  isBtnRightDisabled = signal(false);

  @HostListener('window:resize')
  onResize() {
    this.hasScroll();
  }

  ngAfterViewInit(): void {
    this.hasScroll();
  }

  scrollRight(): void {
    const scrollAmount =
      window.innerWidth >= 350 ? window.innerWidth - 200 : window.innerWidth;

    this.renderer.setProperty(
      this.el()?.nativeElement,
      'scrollLeft',
      this.el()?.nativeElement.scrollLeft + scrollAmount
    );
  }

  scrollLeft(): void {
    const scrollAmount = window.innerWidth - 200;

    this.renderer.setProperty(
      this.el()?.nativeElement,
      'scrollLeft',
      this.el()?.nativeElement.scrollLeft - scrollAmount
    );
  }

  changeBtnStyle() {
    const scrollEl = this.el()?.nativeElement;
    if (scrollEl.scrollLeft > 0 && this.isBtnLeftDisabled()) {
      this.isBtnLeftDisabled.set(false);
    } else if (scrollEl.scrollLeft === 0) {
      this.isBtnLeftDisabled.set(true);
    } else if (
      scrollEl.scrollLeft + scrollEl.clientWidth + 40 < scrollEl.scrollWidth &&
      this.isBtnRightDisabled()
    ) {
      this.isBtnRightDisabled.set(false);
    } else if (
      scrollEl.scrollLeft + scrollEl.clientWidth + 40 >=
      scrollEl.scrollWidth
    ) {
      this.isBtnRightDisabled.set(true);
    }
  }

  hasScroll(): boolean {
    const scrollEl = this.el()?.nativeElement;
    if (scrollEl.scrollWidth > scrollEl.clientWidth) {
      return true;
    }
    return false;
  }

  onScroll() {
    this.changeBtnStyle();
  }
}
