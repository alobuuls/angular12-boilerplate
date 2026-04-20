import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  msgObservable$: BehaviorSubject<string> = new BehaviorSubject<string>('Buenos días');

  getMSg(): Observable<string> {
    return this.msgObservable$.asObservable();
  }

  setMsg(val:string): void {
    this.msgObservable$.next(val);
  }

}
