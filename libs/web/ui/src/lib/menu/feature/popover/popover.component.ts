import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../../../divider';
import { TextFieldComponent } from '../../../form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { MenuAbstractComponent } from '../../utility';
import { PopoverItem } from '../../data-access/models';

@Component({
  selector: 'ui-popover',
  standalone: true,
  imports: [
    CommonModule,
    DividerComponent,
    TextFieldComponent,
    ReactiveFormsModule,
    A11yModule,
  ],
  templateUrl: './popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent extends MenuAbstractComponent {
  @Input() items: PopoverItem[];

  @Output() override uiItemClick = new EventEmitter<PopoverItem>();

  close$ = new Subject<boolean>();

  protected readonly form = new FormGroup({
    search: new FormControl(''),
  });

  onClickItem(item: PopoverItem) {
    this.close$.next(true);
    this.uiItemClick.emit(item);
  }
}
