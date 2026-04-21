import { Component } from '@angular/core';

@Component({
  selector: 'form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})

export class FormTemplateComponent {

  formCompany = {
    email: '',
    nit: ''
  };

  sendForm() {
    console.log(this.formCompany);
  }

}
