import { Component } from '@angular/core';

@Component({
  selector: 'app-bin2-dec-app',
  templateUrl: './bin2-dec-app.component.html',
  styleUrls: ['./bin2-dec-app.component.css'],
})
export class Bin2DecAppComponent {
  error: boolean = false;

  binaryNumber: string = '';
  decimalNumber: number | null = null;

  convertBinaryToDecimal() {
    if (this.binaryNumber) {
      const regExpNotBin = /[^01]/;
      if (regExpNotBin.test(this.binaryNumber)) {
        this.error = true;
      } else {
        this.error = false;
      }
    }

    this.decimalNumber = parseInt(this.binaryNumber, 2);
  }
}
