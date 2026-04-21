import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private msgObservable$: BehaviorSubject<string> = new BehaviorSubject<string>('Buenos días');
  private isAdminObs$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getAdminStatus(): Observable<boolean> {
    return this.isAdminObs$.asObservable();
  }

  getMSg(): Observable<string> {
    return this.msgObservable$.asObservable();
  }

  setAdminStatus(val:boolean): void {
    this.isAdminObs$.next(val);
  }

  setMsg(val:string): void {
    this.msgObservable$.next(val);
  }

}
