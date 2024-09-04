import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorService } from './string-calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'string-calculator';
  numbers: string = '';
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private stringCalculatorService: StringCalculatorService) {}

  calculateSum() {
    try {
      this.result = this.stringCalculatorService.add(this.numbers);
      this.errorMessage = null; // Clear any previous errors
    } catch (error:any) {
      this.errorMessage = error.message;
      this.result = null; // Clear the result if there's an error
    }
  }
}
