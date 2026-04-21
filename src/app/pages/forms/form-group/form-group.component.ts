import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})

export class FormGroupComponent {

  get nit_company() {
    return this.formCompany.get('nit_company') as FormControl;
  }

  get email_company() {
    return this.formCompany.get('email_company') as FormControl;
  }

  formCompany = new FormGroup({
    nit_company: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email_company: new FormControl('', [Validators.required, Validators.email])
  });

  sendData() {
    console.log(this.formCompany.value);
  }

}
