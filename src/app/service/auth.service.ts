import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsettings } from '../settings/appsettings';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = appsettings.apiUrl;

  constructor(private http: HttpClient) {}

  loginViewer(dni: string, codigoBoleto: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/users/login`, { dni, codigoBoleto });
  }

  loginStaff(email: string, dni: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/staff/login`, { email, dni });
  }

  getViewerByDni(dni: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/dni/${dni}`);
  }
}
