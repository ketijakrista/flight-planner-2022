import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightLocation, SearchFlightsQuery, SearchFlightsResponse } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(private http: HttpClient) {}

  findAirports(query: string): Observable<FlightLocation[]> {
    const url = `http://localhost:8080/api/airports`;
    const params = { search: query };

    return this.http.get<FlightLocation[]>(url, { params });
  }

  searchFlights(query: SearchFlightsQuery): Observable<SearchFlightsResponse> {
    const url = `http://localhost:8080/api/flights/search`;

    return this.http.post<SearchFlightsResponse>(url, query);
  }
}
