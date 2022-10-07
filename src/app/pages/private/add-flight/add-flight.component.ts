import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss'],
})
export class AddFlightComponent implements OnInit, OnDestroy {
  addFlightForm?: FormGroup;
  errorMessage = 'Error';
  ngDestroyed$ = new Subject<void>();

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  buildForm(): void {
    this.addFlightForm = this.fb.group({
      from: this.fb.group({
        country: 'Latvia',
        city: 'Riga',
        airport: 'RIX',
      }),
      to: this.fb.group({
        country: 'Estonia',
        city: 'Tallin',
        airport: 'EST',
      }),
      carrier: 'Air baltic',
      departureTime: '2019-01-01 00:00',
      arrivalTime: '2019-01-02 00:00',
    });
  }

  submit(): void {
    if (this.addFlightForm?.value) {
      const query = {
        ...this.addFlightForm.value,
        departureTime: this.addFlightForm.value.departureTime.replace('T', ' '),
        arrivalTime: this.addFlightForm.value.arrivalTime.replace('T', ' '),
      };

      this.adminService
        .addFlight(query)
        .pipe(takeUntil(this.ngDestroyed$))
        .subscribe(
          () => {
            this.errorMessage = '';
          },
          (error) => {
            this.errorMessage = error.message;
          },
        );
    }
  }
}
