import { Component } from '@angular/core';
import { ScaleAnimationDirective } from '../../../../../shared/directives/scale-animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-hero',
  imports: [ScaleAnimationDirective, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
