import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { TooltipIconDirection } from '../models/tooltip-icon-direction';
import { CONNECTION_POSITION_PAIR } from '../../../../data-access/constants';

export default class TooltipService {
  static getTooltipIconDirection(
    position: ConnectionPositionPair
  ): TooltipIconDirection {
    const {
      top,
      topCenter,
      topLeft,
      topRight,
      bottom,
      bottomCenter,
      bottomLeft,
      bottomRight,
      left,
      leftBottom,
      leftTop,
    } = CONNECTION_POSITION_PAIR;
    if ([top, topCenter, topLeft, topRight].includes(position)) {
      return TooltipIconDirection.BOTTOM;
    } else if (
      [bottom, bottomCenter, bottomLeft, bottomRight].includes(position)
    ) {
      return TooltipIconDirection.TOP;
    } else if ([left, leftBottom, leftTop].includes(position)) {
      return TooltipIconDirection.RIGHT;
    } else {
      return TooltipIconDirection.LEFT;
    }
  }
}
