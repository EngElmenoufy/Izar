import { TitleCasePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorValidationComponent } from './components/error-validation/error-validation.component';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, TitleCasePipe, ErrorValidationComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  label = input<string>('input');
  id = input<string>('input');
  type = input<string>('text');
  control = input<any>();

  isShowPassword = signal<boolean>(false);

  onToggleShowPassword() {
    this.isShowPassword.update((value) => !value);
  }
}
