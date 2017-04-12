import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent {

  public innerValue: string = '';

  @Input() set model(value) {
    this.innerValue = value;
    this.propagateChange(this.innerValue);
  }

  get model() {
    return this.innerValue;
  }

  @Output() modelChange = new EventEmitter();

  @Input() set value(value) {
    this.innerValue = value;
    this.modelChange.emit(this.innerValue);
    this.propagateChange(this.innerValue);
  }

  get value() {
    return this.innerValue;
  }

  /**
   * Write a new value to the element.
   */
  writeValue(value: any) {
    if (value) {
      this.innerValue = value;
    }
  }

  propagateChange = (_: any) => { };

  /**
   * Set the function to be called
   * when the control receives a change event.
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  /**
   * Set the function to be called
   * when the control receives a touch event.
   */
  registerOnTouched() { }

  setDisabledState(isDisabled: boolean): void { }
}
