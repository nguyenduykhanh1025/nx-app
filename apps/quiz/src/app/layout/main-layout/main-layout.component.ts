import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  FlashCardComponent,
  IconButtonComponent,
  IconComponent,
  TagComponent,
  ProgressComponent,
  TextFieldComponent,
  TextAreaComponent,
  DialogService,
  DialogType,
  ButtonType,
  ButtonSize,
  AvatarShape,
  TooltipDirective,
} from '@nx-app/web/libs';
import { TestComponent } from './test/test.component';
import { BehaviorSubject, of } from 'rxjs';
import { TooltipPortalComponent } from '../../../../../../libs/web/ui/src/lib/tooltip/tooltip-portal/tooltip-portal.component';

@Component({
  selector: 'quiz-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    FlashCardComponent,
    ButtonComponent,
    IconButtonComponent,
    AvatarComponent,
    TagComponent,
    CardComponent,
    ProgressComponent,
    TextFieldComponent,
    TextAreaComponent,
    TooltipDirective,
    TooltipPortalComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  ButtonType = ButtonType;
  ButtonSize = ButtonSize;
  AvatarShape = AvatarShape;

  dialogService = inject(DialogService);

  test$$ = new BehaviorSubject(true);
  idx = 0;

  // ref: DialogRef;

  something(): void {
    // if(this.idx % 2 === 0) {
    //   this.test$$.next(false);
    // } else {
    //   this.test$$.next(true);
    // }
    // this.idx += 1;

    this.dialogService.open(TestComponent, {
      header: 'header of something',
      // disableClose$: this.test$$.asObservable(),
      type$: of(DialogType.NO),
      isShownCloseButton$: of(false)
    });
    // setTimeout(() => {
    //   this.test$$.next(false);
    // }, 5000)
  }

  something2(): void {
    // this.dialogService.open(Test2Component);
    // if(!this.ref) return;
    // this.ref.close();
    // throw new Error('Method not implemented.');
  }
}
