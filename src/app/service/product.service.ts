import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsettings } from '../settings/appsettings';
import { Product } from '../interface/protuct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = appsettings.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/productos`);
  }
}
