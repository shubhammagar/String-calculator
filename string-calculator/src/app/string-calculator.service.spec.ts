import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(service.add('1,2')).toBe(3);
  });


  it('should return the number itself when a single number is provided', () => {
    expect(service.add('1')).toBe(1);
    expect(service.add('5')).toBe(5);
  });

  it('should return the sum of multiple numbers separated by commas', () => {
    expect(service.add('1,2,3')).toBe(6);
  });

  it('should handle newlines as delimiters', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  it('should handle custom delimiters specified in the format "//[delimiter]\\n"', () => {
    expect(service.add('//;\n1;2')).toBe(3);
    expect(service.add('//|\n1|2|3')).toBe(6);
  });

  it('should throw an error when negative numbers are provided', () => {
    expect(() => service.add('1,-2,3')).toThrowError('Negative numbers not allowed: -2');
    expect(() => service.add('-1,-2,-3')).toThrowError('Negative numbers not allowed: -1, -2, -3');
  });

  it('should throw an error when negative numbers are provied with delimiter', () => {
    expect(() => service.add('//;\n1;-2')).toThrowError('Negative numbers not allowed: -2');
    expect(() => service.add('//|\n-1|-2|-3')).toThrowError('Negative numbers not allowed: -1, -2, -3');
  });
});
