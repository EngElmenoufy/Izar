import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {
  header = input<string>('main title');
  description = input<string>('');
}
