import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RecommendedFeatureBgColor, RecommendedFeatureBgImage } from '../../utility/models';
import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { RecommendedFeatureComponent } from '../recommended-feature/recommended-feature.component';
import { RecommendedFeature } from '@quiz-app/data-access/models/recommended-feature.model';

@Component({
  selector: 'quiz-recommended-features',
  standalone: true,
  imports: [CommonModule, HomeCardsComponent, RecommendedFeatureComponent],
  templateUrl: './recommended-features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedFeaturesComponent {
  @Input({ required: true }) recommendedFeatures: RecommendedFeature[];

  protected RecommendedFeatureBgColor = RecommendedFeatureBgColor;
  protected RecommendedFeatureBgImage = RecommendedFeatureBgImage;
}
