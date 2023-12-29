import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ui-button-icon',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent {}
