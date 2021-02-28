import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from '../models/settings.model';
import { initialSettings } from '../constants/initial-settings.const';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SettingsStateService {
  private readonly _state = new BehaviorSubject<Settings>(initialSettings);
  readonly states$ = this._state.asObservable();
  readonly cookieName = 'settings';

  constructor(private cookieService: CookieService) {
    this.loadFromCookie();
  }

  get state(): Settings {
    return this._state.getValue();
  }

  /**
   * Checks if the cookie exists and if so, it retrieves the saved settings.
   */
  loadFromCookie(): void {
    const cookieExists: boolean = this.cookieService.check(this.cookieName);
    if (cookieExists) {
      const cookieValue: Settings = JSON.parse(this.cookieService.get(this.cookieName));
      this._state.next(cookieValue);
    }
  }

  update(state: Settings) {
    this._state.next(state);
    this.cookieService.set(this.cookieName, JSON.stringify(state));
  }
}