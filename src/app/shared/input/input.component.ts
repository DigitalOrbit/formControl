import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }
  private innerValue: string = '';

  @Input() label: string = '';
  @Input() set model(value) {
    this.innerValue = value;
    this.modelChange.emit(this.innerValue);
    this.propagateChange(this.innerValue);
  }

  get model() {
    return this.innerValue;
  }

  @Output() modelChange = new EventEmitter();

  writeValue(value: any) {
    if (value !== undefined) {
      this.innerValue = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
