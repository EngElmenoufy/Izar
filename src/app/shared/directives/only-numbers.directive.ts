import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
})
export class OnlyNumbersDirective {
  private elementRef = inject(ElementRef);

  @HostListener('input', ['$event'])
  onChange(event: Event) {
    const el = event.target as HTMLInputElement;
    // if (el.value.length % 3 === 0) {
    //   el.value = el.value + ',';
    // }

    const digit = el.value.replace(/[^0-9]/g, '');

    const formatted = this.formatWithCommas(digit);

    el.value = formatted;
  }

  formatWithCommas(value: string): string {
    if (!value) return '';
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event: KeyboardEvent) {
    const char = event.key;
    if (!/[0-9]/.test(char)) {
      event.preventDefault();
    }
  }
}
