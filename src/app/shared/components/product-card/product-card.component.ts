import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { StarsComponent } from '../stars/stars.component';
import { IconsComponent } from '../icons/icons.component';
import { ProductColorsComponent } from './components/product-colors/product-colors.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    StarsComponent,
    IconsComponent,
    ProductColorsComponent,
    ButtonComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input<Product>();
  isFixedWidth = input<boolean>(true);
  productColors = [
    {
      color: '#fff',
      name: 'white',
    },
    {
      color: '#000',
      name: 'black',
    },
    {
      color: '#f06',
      name: 'red',
    },
    {
      color: '#06f',
      name: 'blue',
    },
  ];
  // openOrFavorite = output<{
  //   el: HTMLElement;
  //   slug: string;
  //   productId: string;
  // }>();

  onOpenOrFavorite(event: Event) {
    const el = event.target as HTMLElement;

    // this.openOrFavorite.emit({
    //   el,
    //   slug: this.product()?.slug,
    //   productId: this.product()?._id,
    // });
  }
}
