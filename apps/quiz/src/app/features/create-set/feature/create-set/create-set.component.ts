import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonComponent,
  ButtonSize,
  ButtonType,
  CardComponent,
  DialogService,
  IconButtonComponent,
  TextAreaComponent,
  TextFieldComponent,
} from '@nx-app/web/libs';
import { LanguageSelectionComponent } from '../../ui/language-selection/language-selection.component';
import { MenuDirective } from '../../../../../../../../libs/web/ui/src/lib/menu/feature/menu.directive';
import { MenuComponent } from 'libs/web/ui/src/lib/menu/feature/menu.component';
import { PopoverDirective } from '../../../../../../../../libs/web/ui/src/lib/popover/feature/popover.directive';
import { PopoverComponent } from 'libs/web/ui/src/lib/popover/feature/popover/popover.component';

@Component({
  selector: 'quiz-create-set',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TextFieldComponent,
    ReactiveFormsModule,
    TextAreaComponent,
    IconButtonComponent,
    CardComponent,
    MenuDirective,
    MenuComponent,
    PopoverDirective,
    PopoverComponent,
  ],
  templateUrl: './create-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSetComponent {
  protected readonly ButtonType = ButtonType;
  protected readonly ButtonSize = ButtonSize;

  readonly #dialogService = inject(DialogService);

  readonly createSetForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    schoolName: new FormControl(''),
    subjectName: new FormControl(''),
  });

  readonly lessonForm = new FormGroup({
    schoolName: new FormControl(''),
    subjectName: new FormControl(''),
  });

  handleLanguageSelection() {
  }
}
