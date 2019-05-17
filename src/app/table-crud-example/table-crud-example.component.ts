import { Component, OnInit } from '@angular/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';

@Component({
  selector: 'app-table-crud-example',
  templateUrl: './table-crud-example.component.html',
  styleUrls: ['./table-crud-example.component.css']
})
export class TableCrudExampleComponent implements OnInit {

  displayDialog: boolean;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }

  save() {
      let cars = [...this.cars];
      if (this.newCar)
          cars.push(this.car);
      else
          cars[this.cars.indexOf(this.selectedCar)] = this.car;

      this.cars = cars;
      this.car = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i != index);
      this.car = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
      let car = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }

}
