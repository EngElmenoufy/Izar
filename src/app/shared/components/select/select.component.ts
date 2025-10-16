import {
  Component,
  computed,
  forwardRef,
  HostListener,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [IconsComponent, ClickOutsideDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit {
  label = input<string>();
  options = input.required<string[]>();
  selected = signal<string>('');
  isOpen = signal<boolean>(false);

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.selected.set(`All ${this.label()}`);
  }

  writeValue(value: string): void {
    this.selected.set(value || `All ${this.label()}`);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(event: Event): void {
    const el = event.target as HTMLElement;

    if (el.closest('LI') && el.textContent) {
      this.selected.set(el.textContent);
      this.onChange(el.textContent); // update form value
      this.onTouched();
      this.onClose();
    }
  }

  toggle(): void {
    this.isOpen.update((val) => !val);
  }

  onClose(): void {
    this.isOpen.set(false);
  }
}
