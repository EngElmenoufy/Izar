import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  btnName = input<string>('button');
  additionalClass = input<string>();
  type = input<'button' | 'submit'>('button');
}
