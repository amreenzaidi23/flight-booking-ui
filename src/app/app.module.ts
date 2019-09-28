import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlightComponent } from "./flight/flight.component";
import { SearchFlightComponent } from "./searchflight/searchflight.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { BasicAuthHtppInterceptorService } from "./service/basic-auth-htpp-interceptor.service";
import { AddFlightComponent } from "./add-flight/add-flight.component";
import { BookFlightComponent } from "./book-flight/book-flight.component";
import { BookingComponent } from "./booking/booking.component";

import { Flight } from "./service/httpclient.service";

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    AddFlightComponent,
    SearchFlightComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    BookFlightComponent,
    BookingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
