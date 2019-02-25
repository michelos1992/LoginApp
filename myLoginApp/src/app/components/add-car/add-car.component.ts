// import { CarService } from './../../services/car.service';
// import { Car } from './../../models/car';
// import { Router } from '@angular/router';
// import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-car',
//   templateUrl: './add-car.component.html',
//   styleUrls: ['./add-car.component.css']
// })
// export class AddCarComponent implements OnInit {

//   carForm: FormGroup;

//   vehicleBrand = '';
//   model = '';
//   year: number = null;
//   power: number = null;
//   enginCapacity: number = null;
//   isLoadingResults = false;

//   constructor(private router: Router, private carService: CarService, private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.carForm = this.formBuilder.group({
//       vehicleBrand : [null, Validators.required],
//       model : [null, Validators.required],
//       year : [null, Validators.required],
//       power : [null, Validators.required],
//       enginCapacity : [null, Validators.required]
//     });
//   }

//   add(name: string): void {
//     name = name.trim();
//     if (!name) { return; }
//     this.heroService.addHero({ name } as Hero)
//       .subscribe(hero => {
//         this.heroes.push(hero);
//       });
//   }

// }
