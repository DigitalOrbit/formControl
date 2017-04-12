import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[streetValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StreetValidatorDirective,
    multi: true
  }]
})
export class StreetValidatorDirective {
  validate(control: AbstractControl): { [key: string]: any } {
    const regex = /^(.+)\s(\d+(\s*[^\d\s]+)*)$/;

    if (!control.value || control.value === '' || regex.test(control.value)) {
      return null;
    } else {
      return { 'invalidStreet': true };
    }
  }
}
