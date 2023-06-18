import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appTeamSizeValidator]',
  providers: [{provide:NG_VALIDATORS, useExisting:TeamSizeValidatorDirective, multi:true}]
})
export class TeamSizeValidatorDirective implements Validator{

  constructor() { }

  @Input('appTeamSizeValidator') n : any = null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // throw new Error('Method not implemented.');

    let currentValue = control.value;
    let isValid = currentValue%this.n == 0;

    if(isValid){
      return null;
    }else{
      return { divisible : {valid:false} };
    }

  }

}
