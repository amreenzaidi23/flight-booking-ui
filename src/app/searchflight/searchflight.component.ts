import { Component, OnInit } from "@angular/core";
import { HttpClientService, Flight } from "../service/httpclient.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchflight",
  templateUrl: "./searchflight.component.html",
  styleUrls: ["./searchflight.component.css"]
})
export class SearchFlightComponent implements OnInit {
  flights: Flight[];
  flight: Flight = new Flight("", "", "", "", 0, 0, "", 0);

  constructor(
    private router: Router,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit() {
    this.httpClientService
      .getFlights()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }
  searchFlight() {
    this.httpClientService
      .getFlights()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  bookFlight(flight: Flight): void {
    this.router.navigate(["bookflight"], {
      queryParams: flight
    });
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    console.log(this.flight.date);
    this.flights = response.filter(
      f =>
        (f.source === this.flight.source &&
          f.destination === this.flight.destination) ||
        f.date === this.flight.date
    );
  }
}
