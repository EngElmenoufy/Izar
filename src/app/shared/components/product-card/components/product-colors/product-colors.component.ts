import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-colors',
  imports: [],
  templateUrl: './product-colors.component.html',
  styleUrl: './product-colors.component.css',
})
export class ProductColorsComponent {
  colors = input<
    {
      color: string;
      name: string;
    }[]
  >();
}
