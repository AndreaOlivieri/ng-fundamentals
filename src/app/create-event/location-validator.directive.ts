import { Directive } from '@angular/core';
import {FormGroup, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true
    }
  ]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): {[key: string]: any} {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

    let errors;
    if (!(
      (addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    )) {
      errors = {
        validateLocation: false
      };
    }

    return errors;
  }

}
