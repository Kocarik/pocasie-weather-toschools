import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather'
import 'rxjs/Rx';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  myWeather: CurrentWeather;
  errMsg: string;
  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }

  search(city: string) {
    this.ws.cityWeather(city).subscribe(
      (data) => {
        console.log(data);
        this.myWeather = new CurrentWeather(
          data.name,
          data.main.temp,
          data.weather[0].icon,
          data.weather[0].description,
          data.main.temp_max,
          data.main.temp_min)
      }
      , respErr => this.errMsg = respErr);
    this.errMsg = null;
  }

}