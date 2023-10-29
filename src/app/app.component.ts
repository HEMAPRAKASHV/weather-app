import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }

  cityName:string ='welligton';
  weatherData?: WeatherData

  ngOnInit(): void {
    this.getweatherData(this.cityName);
  }

  onSubmit(){
    this.getweatherData(this.cityName);
    this.cityName = '';
  }

  private getweatherData(cityName: string) {
    this.weatherService.getweatherData(cityName)
      .subscribe({
        next: (response: any) => {
          this.weatherData = response
          console.log(response)
        }
      })
  }
}
