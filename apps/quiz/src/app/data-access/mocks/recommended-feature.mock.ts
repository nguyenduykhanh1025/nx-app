import { RecommendedFeatureBgColor } from '../../features/home/utility/models/recommended-feature-bg-color';
import { RecommendedFeatureBgImage } from '../../features/home/utility/models/recommended-feature-bg-image';
import { RecommendedFeature } from "../models/recommended-feature.model";

export const mockRecommendedFeature = (): RecommendedFeature => {
  return {
    bgColor: RecommendedFeatureBgColor.PRIMARY,
    bgImage: RecommendedFeatureBgImage.HomeCarouselSearching,
    headline: 'Tìm kiếm mạnh mẽ hơn',
    content: 'Tìm thẻ ghi nhớ bạn cần để học về bất kỳ chủ đề nào'
  };
};

export const mockRecommendedFeatures = (): RecommendedFeature[] => {
  return [
    {
      bgColor: RecommendedFeatureBgColor.PRIMARY,
      bgImage: RecommendedFeatureBgImage.HomeCarouselSearching,
      headline: 'Tìm kiếm mạnh mẽ hơn',
      content: 'Tìm thẻ ghi nhớ bạn cần để học về bất kỳ chủ đề nào'
    },
    {
      bgColor: RecommendedFeatureBgColor.SECONDARY,
      bgImage: RecommendedFeatureBgImage.HomeCarouselImproving,
      headline: 'Tìm kiếm mạnh mẽ hơn',
      content: 'Tìm thẻ ghi nhớ bạn cần để học về bất kỳ chủ đề nào'
    },
    {
      bgColor: RecommendedFeatureBgColor.PRIMARY,
      bgImage: RecommendedFeatureBgImage.HomeCarouselAchievement,
      headline: 'Tìm kiếm mạnh mẽ hơn',
      content: 'Tìm thẻ ghi nhớ bạn cần để học về bất kỳ chủ đề nào'
    }
  ]
}
