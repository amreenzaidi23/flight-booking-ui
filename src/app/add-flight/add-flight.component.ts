import { Component, OnInit } from "@angular/core";
import { HttpClientService, Flight } from "../service/httpclient.service";

@Component({
  selector: "app-add-flight",
  templateUrl: "./add-flight.component.html",
  styleUrls: ["./add-flight.component.css"]
})
export class AddFlightComponent implements OnInit {
  flight: Flight = new Flight("", "", "", "", 0, 0, "", 0);

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {}

  createFlight(): void {
    this.httpClientService.createFlight(this.flight).subscribe(data => {
      alert("Flight created successfully.");
    });
  }
}
