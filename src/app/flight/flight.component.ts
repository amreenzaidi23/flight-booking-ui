import { Component, OnInit } from "@angular/core";
import { HttpClientService, Flight } from "../service/httpclient.service";

@Component({
  selector: "app-flight",
  templateUrl: "./flight.component.html",
  styleUrls: ["./flight.component.css"]
})
export class FlightComponent implements OnInit {
  flights: Flight[];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .getFlights()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.flights = response;
  }

  deleteFlight(flight: Flight): void {
    this.httpClientService.deleteFlight(flight).subscribe(data => {
      this.flights = this.flights.filter(u => u !== flight);
    });
  }
}
