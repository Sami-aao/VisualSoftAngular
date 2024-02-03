

import { Injectable } from '@angular/core';
import { Car } from './find-finance/car.model';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    {
      imageURL: 'assets/images/cards/ty2024.jpg',
      model: 'Toyota Camry',
      firstpayment: 5000,
      monthlyinstallment: 800,
      financeDuration: 24,
    },
    
  ];

  getCars(): Car[] {
    return this.cars;
  }
}
