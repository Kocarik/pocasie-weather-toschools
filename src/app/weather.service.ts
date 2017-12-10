import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather'
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  currentWeather:CurrentWeather;

constructor(private http: Http) { }

  weatherNow(){
    this.currentWeather;
  }

  localWeaher(lat: string, lon: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bdd0dac2623cdafca896adf8d4ff09d&units=metric`).map((response:Response) => response.json() )
  }


    cityWeather(cityName: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5bdd0dac2623cdafca896adf8d4ff09d&units=metric`).map((response: Response) => response.json()   )
    .catch(this._errHandler);
  }
  _errHandler(error: Response){
    console.error(error);
    return Observable.throw(new Error('Prosim zadaj spravný názov mesta bez diakritiky.'))
  }

}