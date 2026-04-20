import { Component, OnInit } from '@angular/core';

// Services
import { ShareDataService } from '@services/share-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  msg$!:Observable<string>;

  constructor(private _shareData: ShareDataService) { }

  ngOnInit(): void {
    this.msg$ = this._shareData.getMSg();
  }

}
