import { Component, OnInit } from "@angular/core";
import {
  HttpClientService,
  Flight,
  FlightBookingDetails
} from "../service/httpclient.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  flights: Flight[];
  booking: FlightBookingDetails[];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .getBooking()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.booking = response;
  }
}
