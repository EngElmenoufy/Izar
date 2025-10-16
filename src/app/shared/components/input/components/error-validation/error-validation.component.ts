import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-validation',
  imports: [TitleCasePipe],
  templateUrl: './error-validation.component.html',
  styleUrl: './error-validation.component.css',
})
export class ErrorValidationComponent {
  control = input.required<FormControl>();
  label = input<string>('input');
}
