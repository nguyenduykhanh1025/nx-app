import { ConnectionPositionPair } from '@angular/cdk/overlay';

// TODO: try to use another way to implement it, because I are repeating myself: top, topCenter,topLeft,...
export enum PositionMapKey {
  top,
  topCenter,
  topLeft,
  topRight,
  right,
  rightTop,
}

export interface PositionMap {
  [key: string]: ConnectionPositionPair;
}

export const POSITION_MAP: PositionMap = {
  top: new ConnectionPositionPair(
    { originX: 'center', originY: 'top' },
    { overlayX: 'center', overlayY: 'bottom' }
  ),
  topCenter: new ConnectionPositionPair(
    { originX: 'center', originY: 'top' },
    { overlayX: 'center', overlayY: 'bottom' }
  ),
  topLeft: new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'bottom' }
  ),
  topRight: new ConnectionPositionPair(
    { originX: 'end', originY: 'top' },
    { overlayX: 'end', overlayY: 'bottom' }
  ),
  right: new ConnectionPositionPair(
    { originX: 'end', originY: 'center' },
    { overlayX: 'start', overlayY: 'center' }
  ),
  rightTop: new ConnectionPositionPair(
    { originX: 'end', originY: 'top' },
    { overlayX: 'start', overlayY: 'top' }
  ),
  rightBottom: new ConnectionPositionPair(
    { originX: 'end', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'bottom' }
  ),
  bottom: new ConnectionPositionPair(
    { originX: 'center', originY: 'bottom' },
    { overlayX: 'center', overlayY: 'top' }
  ),
  bottomCenter: new ConnectionPositionPair(
    { originX: 'center', originY: 'bottom' },
    { overlayX: 'center', overlayY: 'top' }
  ),
  bottomLeft: new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' }
  ),
  bottomRight: new ConnectionPositionPair(
    { originX: 'end', originY: 'bottom' },
    { overlayX: 'end', overlayY: 'top' }
  ),
  left: new ConnectionPositionPair(
    { originX: 'start', originY: 'center' },
    { overlayX: 'end', overlayY: 'center' }
  ),
  leftTop: new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'end', overlayY: 'top' }
  ),
  leftBottom: new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'end', overlayY: 'bottom' }
  ),
};
