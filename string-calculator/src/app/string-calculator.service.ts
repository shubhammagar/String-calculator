import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
  
    const numberArray = numbers.split(',').map(num => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
