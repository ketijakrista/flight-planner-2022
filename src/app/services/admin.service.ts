import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addFlight(query: any): Observable<any> {
    const url = 'http://localhost:8080/admin-api/flights';
    const options = {
      headers: { 'Add-Credentials': '' },
      withCredentials: true,
    };

    return this.http.put(url, query, options);
  }
}
