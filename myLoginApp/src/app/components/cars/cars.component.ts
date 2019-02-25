import { Car } from '../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  add(car: Car): void {
    this.carService.addCar( car )
      .subscribe(carr => {
        this.cars.push(car);
      });
  }

  // delete(car: Car): void {
  //   this.cars = this.cars.filter(h => h !== car);
  //   this.carService.deleteCar(car).subscribe();
  // }
}
