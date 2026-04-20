import { Component, OnInit } from '@angular/core';

// Services
import { ShareDataService } from '@services/share-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  msg$!:Observable<string>;
  msgForm!: string;

  constructor(private _shareData: ShareDataService) { }

  ngOnInit(): void {
    this.msg$ = this._shareData.getMSg();
  }

  emitMsg(): void {
    this._shareData.setMsg(this.msgForm);
  }
}
