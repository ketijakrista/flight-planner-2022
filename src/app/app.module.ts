import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddFlightComponent } from './pages/private/add-flight/add-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FindFlightComponent } from './pages/private/find-flight/find-flight.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AirportsComponent } from './pages/public/airports/airports.component';
import { FlightSearchComponent } from './pages/public/flight-search/flight-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFlightComponent,
    FindFlightComponent,
    HomeComponent,
    AirportsComponent,
    FlightSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
