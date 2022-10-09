import { Component, OnDestroy } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { Flight } from '../../../models/flight.model';

@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.scss'],
})
export class FindFlightComponent implements OnDestroy {
  inputValue = '';
  ngDestroyed$ = new Subject<void>();
  flight?: Flight;
  errorMessage = '';

  constructor(private adminService: AdminService) {}

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  findFlight(): void {
    this.adminService
      .findFlight(this.inputValue)
      .pipe(
        takeUntil(this.ngDestroyed$),
        finalize(() => {
          this.inputValue = '';
        }),
      )
      .subscribe(
        (flight) => {
          console.log('flight', flight);
          this.flight = flight;
          this.errorMessage = '';
        },
        (error) => {
          console.log(error);
          this.flight = undefined;
          this.errorMessage = error.statusText;
        },
      );
  }

  deleteFlight(id: number): void {
    this.adminService
      .deleteFlight(id)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(
        (response) => {
          this.flight = response;
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
      );
  }
}
