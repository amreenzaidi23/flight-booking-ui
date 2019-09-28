import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Flight {
  constructor(
    public flightId: string,
    public name: string,
    public source: string,
    public destination: string,
    public seat: number,
    public bookedSeat: number,
    public date: string,
    public amount: number
  ) {}
}

export class FlightBookingDetails {
  constructor(
    public bookingId: string,
    public flightId: string,
    public name: string,
    public source: string,
    public destination: string,
    public seat: number,
    public bookedSeat: number,
    public date: string,
    public amount: number,
    public paxName: string,
    public paxEmail: string,
    public paxCardNumber: number,
    public paxAge: number
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}


  getFlights() {
    let username = "abc";
    let password = "password";

    const headers = new HttpHeaders({
      Authorization: "Basic " + btoa(username + ":" + password)
    });

    return this.httpClient.get<Flight[]>("http://localhost:8080/flight", {
      headers
    });
  }

  getBooking() {
    let username = "abc";
    let password = "password";

    const headers = new HttpHeaders({
      Authorization: "Basic " + btoa(username + ":" + password)
    });

    return this.httpClient.get<FlightBookingDetails[]>(
      "http://localhost:8080/flightbook/get",
      {
        headers
      }
    );
  }


  public deleteFlight(flight) {
    let username = "abc";
    let password = "password";

    const headers = new HttpHeaders({
      Authorization: "Basic " + btoa(username + ":" + password)
    });
    return this.httpClient.delete<Flight>(
      "http://localhost:8080/flight" + "/" + flight.flightId,
      { headers }
    );
  }

  public createFlight(flight) {
    let username = "abc";
    let password = "password";

    const headers = new HttpHeaders({
      Authorization: "Basic " + btoa(username + ":" + password)
    });
    return this.httpClient.post<Flight>(
      "http://localhost:8080/flight",
      flight,
      { headers }
    );
  }

  public bookFlight(flightBookDetails) {
    let username = "abc";
    let password = "password";

    const headers = new HttpHeaders({
      Authorization: "Basic " + btoa(username + ":" + password)
    });
    return this.httpClient.post<FlightBookingDetails>(
      "http://localhost:8080/flightbook/book",
      flightBookDetails,
      { headers }
    );
  }
}
