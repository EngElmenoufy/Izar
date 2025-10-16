import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../../../../shared/components/main-header/main-header.component';
import { FadeAnimationDirective } from '../../../../../shared/directives/fade-animation.directive';
import { IconsComponent } from '../../../../../shared/components/icons/icons.component';

@Component({
  selector: 'app-explore-custom-design',
  imports: [MainHeaderComponent, FadeAnimationDirective, IconsComponent],
  templateUrl: './explore-custom-design.component.html',
  styleUrl: './explore-custom-design.component.css',
})
export class ExploreCustomDesignComponent {}
