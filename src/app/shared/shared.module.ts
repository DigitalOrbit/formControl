import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { StreetValidatorDirective } from './validations/street-validator.directive';
import { BaseComponent } from './base/base.component';

export const APPLICATION_VALIDATORS = [StreetValidatorDirective];
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BaseComponent,
    InputComponent,
    APPLICATION_VALIDATORS
  ],
  declarations: [
    BaseComponent,
    InputComponent,
    APPLICATION_VALIDATORS,
  ]
})
export class SharedModule { }
