import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent {

  formCompany:FormGroup;
  isFormCompanySaved: boolean = false;

  constructor( private fb: FormBuilder ) {
    this.formCompany = this.fb.group({
      nit_company: ['', [Validators.required, Validators.minLength(10)]],
      email_company: ['', [Validators.required, Validators.email]]
    });
  }

  get nit_company() {
    return this.formCompany.get('nit_company') as FormControl;
  }

  get email_company() {
    return this.formCompany.get('email_company') as FormControl;
  }

  sendData() {
    this.isFormCompanySaved = true;
    console.log(this.formCompany.value);
  }
}
