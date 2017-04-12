import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() minlength: string = '';
  @Input() maxlength: string = '';
  @Input() pattern: string = '';
  @Input() required: boolean = false;

}
