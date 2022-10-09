import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './pages/private/add-flight/add-flight.component';
import { PrivateGuard } from './guards/private.guard';
import { FindFlightComponent } from './pages/private/find-flight/find-flight.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AirportsComponent } from './pages/public/airports/airports.component';
import { FlightSearchComponent } from './pages/public/flight-search/flight-search.component';

// TODO: update routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'airports',
    component: AirportsComponent,
  },
  {
    path: 'search',
    component: FlightSearchComponent,
  },
  {
    path: 'add',
    canActivate: [PrivateGuard],
    component: AddFlightComponent,
  },
  {
    path: 'find',
    canActivate: [PrivateGuard],
    component: FindFlightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
