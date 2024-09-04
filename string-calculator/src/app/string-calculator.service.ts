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
  
    let delimiterRegex = /[,\n]/; // Default delimiters are ',' and '\n'
    let numberString = numbers;
  
    if (numbers.startsWith('//')) {
      const delimiterSpec = numbers.match(/^\/\/(.+)\n/);
      const customDelimiter = delimiterSpec ? delimiterSpec[1] : '';
      
      // Escape any special characters in the custom delimiter
      const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
      delimiterRegex = new RegExp(`[${escapedDelimiter}]`);
      numberString = numbers.split('\n')[1]; // Skip the delimiter declaration line
    }
  
    const numberArray = numberString.split(delimiterRegex).map(num => parseInt(num, 10));
  
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
