import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddFlightComponent } from "./add-flight/add-flight.component";
import { FlightComponent } from "./flight/flight.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGaurdService } from "./service/auth-gaurd.service";
import { SearchFlightComponent } from "./searchflight/searchflight.component";
import { BookFlightComponent } from "./book-flight/book-flight.component";
import { BookingComponent } from "./booking/booking.component";

const routes: Routes = [
  {
    path: "viewflight",
    component: FlightComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: "viewbook",
    component: BookingComponent
  },
  {
    path: "searchflight",
    component: SearchFlightComponent
  },
  {
    path: "addflight",
    component: AddFlightComponent,
    canActivate: [AuthGaurdService]
  },

  {
    path: "bookflight",
    component: BookFlightComponent,
    canActivate: [AuthGaurdService]
  },
  { path: "login", component: LoginComponent },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
