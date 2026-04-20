import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
