import { RecommendedFeatureBgColor } from '../../features/home/utility/models/recommended-feature-bg-color';
import { RecommendedFeatureBgImage } from '../../features/home/utility/models/recommended-feature-bg-image';

export interface RecommendedFeature {
  bgColor: RecommendedFeatureBgColor;
  bgImage: RecommendedFeatureBgImage;
  headline: string;
  content: string;
}
