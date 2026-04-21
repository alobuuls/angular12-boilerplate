import { Component } from '@angular/core';

// Pipes
import { EllipsisPipe } from '@pipes/ellipsis.pipe';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  ellipsisPipe = new EllipsisPipe(); // crear instancia local

  constructor() {
    let x = this.ellipsisPipe.transform('Hola esto es una prueba de pipe desde el ts', 35, 'X');
    console.log(x);
  }

}
