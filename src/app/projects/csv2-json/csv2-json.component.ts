import { Component } from '@angular/core';

@Component({
  selector: 'app-csv2-json',
  templateUrl: './csv2-json.component.html',
  styleUrls: ['./csv2-json.component.css'],
})
export class CSV2JSONComponent {
  csvInput: string = '';

  jsonInput: string = '';

  handleCSVToArray(strData: string, strDelimiter: string = ',') {
    const objPattern = new RegExp(
      `(${strDelimiter}|\\r?\\n|\\r|^)("(?:[^"]*(?:""[^"]*)*)"|([^"${strDelimiter}\\r\\n]*))`,
      'gi'
    );

    let arrData: string[][] = [[]];
    let arrMatches: RegExpExecArray | null = null;

    while ((arrMatches = objPattern.exec(strData))) {
      const strMatchedDelimiter = arrMatches[1];

      if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter)
        arrData.push([]);

      const strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');

      arrData[arrData.length - 1].push(strMatchedValue);
    }

    return arrData;
  }

  handleReadCSVInput() {
    const CSVToArray: string[][] = this.handleCSVToArray(this.csvInput);
    const objArray: any[] = [];

    for (let i = 1; i < CSVToArray.length; i++) {
      objArray[i - 1] = {};

      for (
        let k = 0;
        k < CSVToArray[0].length && k < CSVToArray[i].length;
        k++
      ) {
        let key = CSVToArray[0][k];
        objArray[i - 1][key] = CSVToArray[i][k];
      }
    }
    const json = JSON.stringify(objArray);
    this.jsonInput = JSON.stringify(JSON.parse(json), null, 2);
  }
}
