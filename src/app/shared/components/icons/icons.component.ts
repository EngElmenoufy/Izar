import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css',
})
export class IconsComponent {
  icon = input.required<string>();
  color = input<string>('#0e150e');
}
