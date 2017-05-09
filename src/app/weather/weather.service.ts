import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  url = 'http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b1b15e88fa797225412429c1c50c122a1';
  weatherConditionMap = {
    500: 'Cloud-Drizzle.svg',
    501: 'Cloud-Rain.svg',
    800: 'Sun.svg',
    803: 'Cloud.svg'
  };
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private http: Http) {}

  getWeather(): Observable<any> {
    // will simulate return call since remote server is refusing connection
    return this.http.get('../../assets/weather.json').map(
        (response) => {
          // grab the first 4 weather items
          const weatherList = response.json()['list'].slice(0, 4);
          const editedList = [];
          weatherList.forEach(
            (weather) => {
              // add the image paths
              const imgSrc = this.getImgForWeatherCondition(weather['weather'][0]['id']);
              weather['weather'][0]['src'] = imgSrc;
              // add the days of the week
              const weatherDate = new Date(0);
              weatherDate.setUTCSeconds(weather['dt']);
              weather['day'] = this.days[weatherDate.getDay()].slice(0, 3);
              editedList.push(weather);
            }
          );
          return editedList;
        }
    );
   }

  getImgForWeatherCondition(condition: number) {
    return '/src/assets/SVG/' + this.weatherConditionMap[condition];
  }

}
