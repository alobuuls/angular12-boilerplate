import { Component, OnInit } from '@angular/core';

// Services
import { ShareDataService } from '@services/share-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  msg$!:Observable<string>;
  enableAccessToAdmin$!: Observable<boolean>;

  constructor(private _shareData: ShareDataService) { }

  ngOnInit(): void {
    this.msg$ = this._shareData.getMSg();
    this.enableAccessToAdmin$ = this._shareData.getAdminStatus();
  }

  toggleAdminPath(val:boolean) {
    this._shareData.setAdminStatus(val);
  }

}
