import { OverlayConfig } from '@angular/cdk/overlay';
import { of } from 'rxjs';

export class DialogConfig<TData = any> {
  header = '';
  closable = true;
  containerAnimationTiming = 0.3;
  contentAnimationTiming = 0.2;
  animationChildDelay = 0;
  data?: TData;
  overlayConfig?: OverlayConfig;
  disableClose$ = of(false)
}
