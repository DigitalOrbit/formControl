import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component {

  public page2Form: FormGroup;
  public myCity: string;
  public submitted: boolean = false;

  constructor() {
    this.page2Form = new FormGroup({
      title: new FormControl('Dr'),
      salutation: new FormControl('Herr'),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
    })
  }

  public proceed(form): void {
    this.markAsTouched(this.page2Form);
    this.submitted = true;
  }

  public form = {
    city: 'Frankfurt'
  }

  private markAsTouched(group: FormGroup | FormArray) {
    group.markAsTouched()
    for (let i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsTouched();
        group.controls[i].markAsDirty();
      } else {
        this.markAsTouched(group.controls[i]);
      }
    }
  }
}
