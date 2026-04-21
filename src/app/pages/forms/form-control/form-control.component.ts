import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})

export class FormControlComponent {

  nitCompany = new FormControl('', [Validators.required, Validators.minLength(10)]);
  emailCompany = new FormControl('', [Validators.required, Validators.email]);

  sendData() {
    let data = {
      nit: this.nitCompany.value,
      email: this.emailCompany.value
    };

    console.log(data);
  }
}
