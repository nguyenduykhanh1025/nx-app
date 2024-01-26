import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { CONNECTION_POSITION_PAIR } from '../../models';

export class TooltipConfig {
  positions: ConnectionPositionPair[] = [CONNECTION_POSITION_PAIR.bottom, CONNECTION_POSITION_PAIR.top, CONNECTION_POSITION_PAIR.left, CONNECTION_POSITION_PAIR.right];
}
