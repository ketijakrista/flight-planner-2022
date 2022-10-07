import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './pages/private/add-flight/add-flight.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivateGuard } from './guards/private.guard';

// TODO: update routes
const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
  },
  {
    path: 'add-flight',
    canActivate: [PrivateGuard],
    component: AddFlightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
