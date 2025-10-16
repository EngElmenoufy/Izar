import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly cookieService = inject(CookieService);
  private readonly platformId = inject(PLATFORM_ID);

  private http = inject(HttpClient);

  login(data: any): Observable<any> {
    return this.http.post(environment.apiAuthUrl + 'login', data);
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.apiAuthUrl + 'register', data);
  }

  saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cookieService.set('token', token);
    }
  }

  getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      return this.cookieService.get('token');
    }
    return '';
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  decodeToken(): any {
    if (this.isLoggedIn()) {
      return jwtDecode(this.getToken());
    }
    return null;
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post(environment.apiAuthUrl + 'forgot-password', data);
  }

  verifyOtp(data: any): Observable<any> {
    return this.http.post(environment.apiAuthUrl + 'verify-otp', data);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post(environment.apiAuthUrl + 'reset-password', data);
  }
}
