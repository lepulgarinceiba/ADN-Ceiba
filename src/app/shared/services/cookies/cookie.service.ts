import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(private _cookieService: CookieService) {
    this._cookieExpireDate.setDate(this._cookieExpireDate.getDate() + 15);
  }
  private _cookieObservable$: Subject<string> = new Subject<string>();
  private _cookieExpireDate: Date = new Date();

  /**
   * this method are used to suscribe to the observable that emits the value of the cookie
   * @returns the observable that emits the value of the cookie
   */
  public watchCookie(): Observable<string> {
    return this._cookieObservable$.asObservable();
  }

  public completeWatchCookie() {
    this._cookieObservable$.complete();
  }

  public setValue(key: string, value: string) {
    this._cookieService.set(key, value, this._cookieExpireDate);
    this._cookieObservable$.next(value);
  }

  public getValue(key: string): string {
    return this._cookieService.get(key);
  }
}
