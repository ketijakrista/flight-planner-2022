export interface Flight {
  id: number;
  arrivalTime: string;
  departureTime: string;
  carrier: string;
  from: FlightLocation;
  to: FlightLocation;
}

export interface FlightLocation {
  airport: string;
  city: string;
  country: string;
}

export interface AddFlightQuery {
  arrivalTime: string;
  departureTime: string;
  carrier: string;
  from: FlightLocation;
  to: FlightLocation;
}

export interface SearchFlightsQuery {
  from: string;
  to: string;
  departureDate: string;
}

export interface SearchFlightsResponse {
  page: number;
  totalItems: number;
  items: Flight[];
}
