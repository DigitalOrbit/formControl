import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent
  ],
  declarations: [InputComponent]
})
export class SharedModule { }
