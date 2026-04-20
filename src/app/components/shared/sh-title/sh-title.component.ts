import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-title',
  templateUrl: './sh-title.component.html',
  styleUrls: ['./sh-title.component.css']
})
export class ShTitleComponent {

  @Input() txt!:string;

  constructor() { }
}
