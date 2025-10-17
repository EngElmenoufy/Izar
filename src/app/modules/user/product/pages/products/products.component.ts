import { Component, inject, signal } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { MainHeaderComponent } from '../../../../../shared/components/main-header/main-header.component';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { OverlayComponent } from '../../../../../shared/components/overlay/overlay.component';
import { ResizeService } from '../../../../../core/services/resize.service';

@Component({
  selector: 'app-products',
  imports: [
    FilterComponent,
    ProductCardComponent,
    NgxPaginationModule,
    ButtonComponent,
    MainHeaderComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  readonly resizeService = inject(ResizeService);
  isMobileFilterOpen = signal<boolean>(false);

  onToggleMobileFilter(): void {
    this.isMobileFilterOpen.update((val) => !val);
  }

  onCloseMobileFilter(): void {
    this.isMobileFilterOpen.set(false);
  }

  p: number = 1;
  times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // collection: any[] = ;
}
