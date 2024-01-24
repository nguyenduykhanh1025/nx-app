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
  TextAreaComponent
} from '@nx-app/web/libs';
import { AvatarShape } from 'libs/web/ui/src/lib/models/avatar-shape';
import { ButtonSize } from 'libs/web/ui/src/lib/models/button-size';
import { ButtonType } from 'libs/web/ui/src/lib/models/button-type';
import { DialogService } from '../../../../../../libs/web/ui/src/lib/dialog/dialog.service';
import { DialogRef } from 'libs/web/ui/src/lib/dialog/dialog-ref';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test.component';
import { BehaviorSubject, ReplaySubject, interval } from 'rxjs';

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
    TextAreaComponent
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

  test$$ = new BehaviorSubject(true)

  ref: DialogRef;

  something() {
    this.ref = this.dialogService.open(TestComponent, {
      header: 'header of something',
      disableClose$: this.test$$.asObservable()
    });

    interval(5000).subscribe(
      () => {
        console.log('asdsadasd');

        this.test$$.next(false)
      }
    )
  }

  something2() {
    // this.dialogService.open(Test2Component);
    // if(!this.ref) return;
    // this.ref.close();
    // throw new Error('Method not implemented.');
  }
}
