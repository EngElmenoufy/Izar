import { Component } from '@angular/core';
import { SliderComponent } from '../../../../../shared/components/slider/slider.component';
import { FadeAnimationDirective } from '../../../../../shared/directives/fade-animation.directive';
import { MainHeaderComponent } from '../../../../../shared/components/main-header/main-header.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@Component({
  selector: 'app-explore-our-categories',
  imports: [
    MainHeaderComponent,
    SliderComponent,
    CategoryCardComponent,
    FadeAnimationDirective,
  ],
  templateUrl: './explore-our-categories.component.html',
  styleUrl: './explore-our-categories.component.css',
})
export class ExploreOurCategoriesComponent {
  categories = [
    {
      src: 'images/categories/anime.png',
      name: 'Anime & Manga',
    },
    {
      src: 'images/categories/movie.png',
      name: 'Movies & TV Shows',
    },
    {
      src: 'images/categories/art.png',
      name: 'Abstract & Art',
    },
    {
      src: 'images/categories/game.png',
      name: 'Gaming',
    },
    {
      src: 'images/categories/football.png',
      name: 'Football & Sports',
    },
  ];
}
