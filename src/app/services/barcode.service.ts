import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  private apiUrl = 'https://api.barcodelookup.com/v2/products'; //url base
  private apiKey = 'zb6pscvsfyv6riluvbvlfac1q7jjdw'; //mi API key
  constructor(private http: HttpClient) {}

  searchByBarcode(barcode: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      apikey: this.apiKey,
    });

    const params = new HttpParams().set('barcode', barcode);

    return this.http.get<any>(this.apiUrl, { headers, params });
  }
}
