import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})

export class EditCarComponent implements OnInit {

  private sub: any;
  car: Car;
  success = false;

  constructor(private carService: CarService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        // tslint:disable-next-line:no-shadowed-variable
        this.carService.getCar(id).subscribe(Car => this.car = Car);
    });
  }

SaveEdit(): void {
  this.carService.updateCar(this.car).subscribe(success => {
    this.success = true;
        });
}

}
