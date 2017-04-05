import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private innerValue: string = '';

  @Input() label: string = '';
  @Input() set model(value) {
    this.innerValue = value;
    this.modelChange.emit(this.innerValue);
  }

  get model() {
    return this.innerValue;
  }

  @Output() modelChange = new EventEmitter();


}
