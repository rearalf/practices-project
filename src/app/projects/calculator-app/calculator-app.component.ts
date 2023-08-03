import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-app',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css'],
})
export class CalculatorAppComponent {
  inputNumber: string = '';
  numbers: string[] = [];
  result: string = '';

  handleGetValues(value: string) {
    if (this.result !== '') {
      this.inputNumber = '';
      this.numbers = [];
      this.result = '';
    }
    if (
      value === '+' ||
      value === '-' ||
      value === '/' ||
      value === 'x' ||
      value === 'C' ||
      value === 'AC'
      ) {
        this.handleOperation(value);
      } else if (value === '=') {
        this.handleCalculator();
      } else if (this.inputNumber.length <= 7) {
      this.inputNumber = this.inputNumber.concat(value);
    }
  }

  handleOperation(value: string) {
    if (this.inputNumber === '') {
      return;
    }

    if (value === 'C') {
      const inputValue = this.inputNumber.split('');
      if (inputValue.length > 0) {
        inputValue.pop();
        this.inputNumber = inputValue.join('');
      }

    }
    if (value === 'AC') {
      this.inputNumber = '';
      this.numbers = [];
    }

    this.handleZeroValidation();

    if (value === '+' && this.inputNumber !== '') {
      this.numbers.push(this.inputNumber);
      this.numbers.push('+');
      this.inputNumber = '';
    }
    if (value === '-' && this.inputNumber !== '') {
      this.numbers.push(this.inputNumber);
      this.numbers.push('-');
      this.inputNumber = '';
    }
    if (value === 'x' && this.inputNumber !== '') {
      this.numbers.push(this.inputNumber);
      this.numbers.push('x');
      this.inputNumber = '';
    }
    if (value === '/' && this.inputNumber !== '') {
      this.numbers.push(this.inputNumber);
      this.numbers.push('/');
      this.inputNumber = '';
    }
  }

  handleZeroValidation() {
    const firstValue = this.inputNumber.split('');
    if (firstValue[0] === '.') {
      this.inputNumber = '0' + this.inputNumber;
      return;
    } else if (firstValue[0] === '0') {
      this.inputNumber = this.inputNumber.replace(/^0+/, '');
    }
  }

  handleValidationLastValue() {
    const lastValueNumbers = this.numbers[this.numbers.length - 1];
    if (
      lastValueNumbers === '+' ||
      lastValueNumbers === '-' ||
      lastValueNumbers === '/' ||
      lastValueNumbers === 'x'
    ) {
      const arr = this.numbers;
      arr.pop();
      this.numbers = arr;
    }
  }

  handleCalculator() {
    if (this.numbers.length === 0) {
      return;
    }

    if (this.inputNumber !== '') {
      this.handleZeroValidation();
      this.numbers.push(this.inputNumber);
      this.inputNumber = '';
    } else {
      this.handleValidationLastValue();
    }

    let result = Number(this.numbers[0]);

    for (let i = 1; i < this.numbers.length; i += 2) {
      const operator = this.numbers[i];
      const operand = Number(this.numbers[i + 1]);

      if (
        operator === '+' ||
        operator === '-' ||
        operator === 'x' ||
        operator === '/'
      ) {
        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case 'x':
            result *= operand;
            break;
          case '/':
            result /= operand;
            break;
        }
      } else {
        return;
      }
    }

    this.result = result.toString();
    this.inputNumber = result.toString();
  }
}
