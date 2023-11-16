import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  weather: Weather | null = null;

  ngOnInit(): void {
    this.http
      .get<Weather>(
        'http://api.weatherapi.com/v1/current.json?key=1e58e9ed016a497c9e1145804231611&q=Portoviejo&aqi=no'
      )
      .subscribe(
        (response) => {
          this.weather = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
