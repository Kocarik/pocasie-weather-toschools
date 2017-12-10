import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  myWeather: CurrentWeather;
  location;
  
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      console.log(this.location);
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.ws.localWeaher(lat, lon).subscribe(
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
      );
    } );
  }

}