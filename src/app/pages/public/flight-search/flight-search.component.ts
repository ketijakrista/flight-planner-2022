import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PublicService } from '../../../services/public.service';
import { Subject, takeUntil } from 'rxjs';
import { Flight } from '../../../models/flight.model';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  flightSearchForm?: FormGroup;
  ngDestroyed$ = new Subject<void>();
  errorMessage = '';
  flights: Flight[] = [];

  constructor(private fb: FormBuilder, private publicService: PublicService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  buildForm(): void {
    this.flightSearchForm = this.fb.group({
      from: 'RIX',
      to: 'EST',
      departureDate: '2019-01-01',
    });
  }

  searchFlights(): void {
    this.publicService
      .searchFlights(this.flightSearchForm?.value)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(
        (response) => {
          this.errorMessage = '';
          this.flights = response.items;
        },
        (error) => {
          this.flights = [];
          this.errorMessage = error.statusText;
        },
      );
  }
}
