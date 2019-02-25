import { Car } from '../models/car';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private carsUrl = 'api/cars'; //'http://localhost:3004/car';

  constructor(
    private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  // getCarNo404<Data>(id: number): Observable<Car> {
  //   const url = `${this.carsUrl}/?id=${id}`;
  //   return this.http.get<Car[]>(url)
  //     .pipe(
  //       map(cars => cars[0])
  //     );
  // }

  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
            catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  AddCar(car) {
      let body = car;
      return this.http.post(this.carsUrl, body, httpOptions).pipe(
              catchError(this.handleError<Car>('addCar')));
  }

  DeleteCar(id) {
    const url = `${this.carsUrl}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
            catchError(this.handleError<Car>('DeleteCar'))
    );
   }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions).pipe(
            catchError(this.handleError<any>('updateCar'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}
