import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { RoutingModule } from './routing/routing.module';
import { WeatherService } from './weather.service';
import { CityComponent } from './city/city.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule, HttpModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, CurrentComponent, ForecastComponent, CityComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherService]
})
export class AppModule { }
