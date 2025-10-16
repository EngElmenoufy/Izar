import { Component, computed, input, OnInit, signal } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-stars',
  imports: [IconsComponent],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent {
  rating = input<number | undefined>(0);
  totalReviews = input<number | undefined>();

  safeRating = computed(() => this.rating() ?? 0);
  safeTotalReviews = computed(() => this.totalReviews() ?? 0);

  hasDecimal = computed(() => {
    const rating = this.safeRating();
    return rating % 1 !== 0;
  });

  numOfFullStars = computed(() => {
    const rating = Math.trunc(this.safeRating());
    return Array(rating).fill(0);
  });
  numOfEmptyStars = computed(() => {
    const fullStars = Math.trunc(this.safeRating());
    const totalShown = this.hasDecimal() ? fullStars + 1 : fullStars;
    const remaining = 5 - totalShown;

    return Array(remaining).fill(0);
  });
}
