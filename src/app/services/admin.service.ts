import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddFlightQuery, Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addFlight(query: AddFlightQuery): Observable<Flight> {
    const url = 'http://localhost:8080/admin-api/flights';
    const options = {
      headers: { 'Add-Credentials': '' },
      withCredentials: true,
    };

    return this.http.put<Flight>(url, query, options);
  }

  findFlight(id: string): Observable<Flight> {
    const url = `http://localhost:8080/admin-api/flights/${id}`;
    const options = {
      headers: { 'Add-Credentials': '' },
      withCredentials: true,
    };

    return this.http.get<Flight>(url, options);
  }

  deleteFlight(id: number): Observable<Flight> {
    const url = `http://localhost:8080/admin-api/flights/${id}`;
    const options = {
      headers: { 'Add-Credentials': '' },
      withCredentials: true,
    };

    return this.http.delete<Flight>(url, options);
  }
}
