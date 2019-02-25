import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from '../models/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const cars = [
      { id: 1, vehicleBrand: 'BMW', model: '523', year: 2015, power: 180, enginCapacity: 2.5 },
      { id: 2, vehicleBrand: 'BMW', model: '318', year: 2010, power: 115, enginCapacity: 1.8 },
      { id: 3, vehicleBrand: 'Mercedes', model: 'S 222', year: 2016, power: 455, enginCapacity:  4.6},
      { id: 4, vehicleBrand: 'Mercedes', model: 'SLK 230', year: 2001, power: 192, enginCapacity: 2.3 },
      { id: 5, vehicleBrand: 'Honda', model: 'Civic', year: 2005, power: 81, enginCapacity: 1.6 },
      { id: 6, vehicleBrand: 'Honda', model: 'Accord', year: 2008, power: 156, enginCapacity: 2.0 },
      { id: 7, vehicleBrand: 'Audi', model: 'A6', year: 2002, power: 172, enginCapacity: 2.5 },
      { id: 8, vehicleBrand: 'Audi', model: 'A3', year: 2000, power: 125, enginCapacity: 1.8 },
      { id: 9, vehicleBrand: 'Ford', model: 'Mustang', year: 2016, power: 303, enginCapacity: 3.7 },
      { id: 10, vehicleBrand: 'Opel', model: 'Astra', year: 2005, power: 105, enginCapacity: 1.6 },
    ];
    return {cars};
  }

  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}
