import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Response } from '@angular/http';
import { KelvinToCelsius } from '../shared/kelvin-to-celsius.pipe';
import { RoundDecimal } from '../shared/round-decimal.pipe';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherList = []; // the whole list
  todayList = []; // just today's weather
  forecastList = []; // the next 3 days of weather

constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(
        (response: any) => {
          this.weatherList = response;
          this.todayList = this.weatherList.slice(0, 1);
          this.forecastList = this.weatherList.slice(1, 4);
        }
    );
  }

  loadImage(condition: number) {
    this.weatherService.getImgForWeatherCondition(condition);
  }

}
