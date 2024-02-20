import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import {
  RecommendedFeatureBgColor,
  RecommendedFeatureBgImage,
} from '../../utility/models';

@Component({
  selector: 'quiz-recommended-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedFeatureComponent {
  @Input() bgColor: RecommendedFeatureBgColor;
  @Input() bgImage: RecommendedFeatureBgImage;
  @Input() headline: string;
  @Input() content: string;
}
