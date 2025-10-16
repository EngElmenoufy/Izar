import { Component } from '@angular/core';
import { FadeAnimationDirective } from '../../../../../shared/directives/fade-animation.directive';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card.component';
import { SliderComponent } from '../../../../../shared/components/slider/slider.component';
import { MainHeaderComponent } from '../../../../../shared/components/main-header/main-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore-our-products',
  imports: [
    FadeAnimationDirective,
    MainHeaderComponent,
    ProductCardComponent,
    SliderComponent,
    RouterLink,
  ],
  templateUrl: './explore-our-products.component.html',
  styleUrl: './explore-our-products.component.css',
})
export class ExploreOutProductsComponent {
  times = Array(10).fill(0);
}
