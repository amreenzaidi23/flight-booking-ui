import { Component, OnInit } from "@angular/core";
import {
  HttpClientService,
  Flight,
  FlightBookingDetails
} from "../service/httpclient.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-flight",
  templateUrl: "./book-flight.component.html",
  styleUrls: ["./book-flight.component.css"]
})
export class BookFlightComponent implements OnInit {
  flight: Flight = new Flight("", "", "", "", 0, 0, "", 0);
  book: FlightBookingDetails = new FlightBookingDetails(
    "",
    "",
    "",
    "",
    "",
    0,
    0,
    "",
    0,
    "",
    "",
    0,
    0
  );
  f: String = "";
  constructor(
    private activateRoute: ActivatedRoute,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit() {
    this.f = this.activateRoute.queryParams["flightId"];
    console.log(
      this.activateRoute.queryParamMap.subscribe(params => {
        this.flight = new Flight(
          params.get("flightId"),
          params.get("name"),
          params.get("source"),
          params.get("destination"),
          Number(params.get("seat")),
          Number(params.get("bookedSeat")),
          params.get("date"),
          Number(params.get("amount"))
        );
      })
    );
    console.log(this.f);
  }

  bookFlight(book: FlightBookingDetails, flight: Flight): void {
    console.log(book);
    console.log(flight);
    book.name = flight.name;
    book.source = flight.source;
    book.destination = flight.destination;
    book.amount = flight.amount;
    book.date = flight.date;
    book.seat = flight.seat;
    book.flightId = flight.flightId;

    console.log(book);
    this.httpClientService.bookFlight(book).subscribe(data => {
      alert("Flight Booked successfully.");
    });
  }
}
