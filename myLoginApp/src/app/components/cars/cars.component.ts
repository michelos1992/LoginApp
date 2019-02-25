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
  pageTitle: string = 'Car List';
  addCar = false;
  newCar: Car = new Car();
  id: number;
  vehicleBrand: string;
  model: string;
  year: number;
  power: number;
  enginCapacity: number;
  edit: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  AddCar(): void {
    this.addCar = true;
  }

  SaveData(): void {
    this.newCar.id = this.id;
    this.newCar.vehicleBrand = this.vehicleBrand;
    this.newCar.model = this.model;
    this.newCar.year = this.year;
    this.newCar.power = this.power;
    this.newCar.enginCapacity = this.enginCapacity;
    this.addCar = false;
    console.log(this.newCar);
    this.carService.AddCar(this.newCar).subscribe(success => {
           // refresh the list
       this.getCars();
            return true;
         },
         error => {
           console.error("Error saving Car!"+ error.Message);
         });
    }

    DeleteCar(car): void {
      if (confirm("Are you sure you want to delete " + car.vehicleBrand + "?")) {
        this.carService.DeleteCar(car.id).subscribe(
           data => {
             // refresh the list
             this.getCars();
             return true;
           },
           error => {
             console.error("Error deleting Employee!");
           }
        );
      }
    }

  // delete(car: Car): void {
  //   this.cars = this.cars.filter(h => h !== car);
  //   this.carService.deleteCar(car).subscribe();
  // }
  Cancel(): void {
    this.addCar = false;
  }
}
