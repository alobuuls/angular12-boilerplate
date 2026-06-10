import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sh-title',
  templateUrl: './sh-title.component.html',
  styleUrls: ['./sh-title.component.css']
})
export class ShTitleComponent {

  @Input() txt!:string;
  @Input() sizeTxt:string = '5rem';
  @Input() colorTxt:string = 'black';
  @Output() wasClickedTitle: EventEmitter<boolean> = new EventEmitter<boolean>();
  wasTitleClicked!:boolean;

  emitClick() {
    this.wasTitleClicked = !this.wasTitleClicked;
    this.wasClickedTitle.emit(this.wasTitleClicked);
  }
}
