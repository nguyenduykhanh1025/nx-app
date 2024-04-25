import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  DialogService,
  FlashCardComponent,
  IconButtonComponent,
  IconComponent,
  ProgressComponent,
  TagComponent,
  TextAreaComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'quiz-app-fashion-flash-card',
  standalone: true,
  imports: [
    CommonModule,
    TextFieldComponent,
    TextAreaComponent,
    ButtonComponent,
    FlashCardComponent,
    IconButtonComponent,
    ProgressComponent,
    AvatarComponent,
    IconComponent,
    CardComponent,
    TagComponent,
  ],
  templateUrl: './fashion-flash-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FashionFlashCardComponent {

  dialogService = inject(DialogService);

  test$$ = new BehaviorSubject(true);
  idx = 0;

  something(): void {
    // if(this.idx % 2 === 0) {
    //   this.test$$.next(false);
    // } else {
    //   this.test$$.next(true);
    // }
    // this.idx += 1;
    // this.dialogService.open(TestComponent, {
    //   header: 'header of something',
    //   // disableClose$: this.test$$.asObservable(),
    //   type$: of(DialogType.NO),
    //   isShownCloseButton$: of(false)
    // });
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
