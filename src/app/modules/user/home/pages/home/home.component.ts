import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../../core/models/product.interface';
import { MessageService } from '../../../../../core/services/message.service';
import { MessageComponent } from '../../../../../shared/components/message/message.component';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card.component';
import { SliderComponent } from '../../../../../shared/components/slider/slider.component';
import { ToastrService } from 'ngx-toastr';
import { ExploreOurCategoriesComponent } from '../../components/explore-our-categories/explore-our-categories.component';
import { ExploreOutProductsComponent } from '../../components/explore-our-products/explore-our-products.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ExploreCustomDesignComponent } from '../../components/explore-custom-design/explore-custom-design.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SliderComponent,
    ProductCardComponent,
    MessageComponent,
    ExploreCustomDesignComponent,
    ExploreOurCategoriesComponent,
    ExploreOutProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  // private readonly messageService = inject(MessageService);
  private readonly toastr = inject(ToastrService);

  products = signal<Product[]>([] as Product[]);

  productsBigDeals = computed(() =>
    this.products().filter((product) => product.discount)
  );

  ngOnInit(): void {
    // this.getAllProducts();
  }

  onOpenOrFavorite(event: {
    el: HTMLElement;
    slug: string;
    productId: string;
  }) {
    if (!!event.el.closest('#favorite')) {
      // console.log('Add To Favorite');
      // this.messageService.showMessage('success', 'Add To Favorite');
      this.toastr.success('Added to favorite');
    } else {
      console.log('else');
      this.router.navigate(['product-details', event.slug, event.productId]);
    }
  }
}
