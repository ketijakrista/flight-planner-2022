import { Component, OnDestroy } from '@angular/core';
import { PublicService } from '../../../services/public.service';
import { Subject, takeUntil } from 'rxjs';
import { FlightLocation } from '../../../models/flight.model';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss'],
})
export class AirportsComponent implements OnDestroy {
  inputValue = '';
  errorMessage = '';
  ngDestroyed$ = new Subject<void>();
  airports: FlightLocation[] = [];

  constructor(private publicService: PublicService) {}

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  findAirports(): void {
    this.publicService
      .findAirports(this.inputValue)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(
        (response) => {
          this.airports = response;
          this.errorMessage = '';
        },
        (error) => {
          this.airports = [];
          this.errorMessage = error.statusText;
        },
      );
  }
}
