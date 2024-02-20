import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@nx-app/web/libs';

import { RecommendedFeatureComponent } from '../../ui/recommended-feature/recommended-feature.component';
import { RecommendedFeatureBgColor, RecommendedFeatureBgImage } from '../../utility/models';

@Component({
  selector: 'quiz-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RecommendedFeatureComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected RecommendedFeatureBgColor = RecommendedFeatureBgColor;
  protected RecommendedFeatureBgImage = RecommendedFeatureBgImage;
}
