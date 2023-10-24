import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { ExportToCsv } from 'export-to-csv';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  generateReport(data, filename = 'Report') {
    if(data?.length){
      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        title: '',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        filename
      };
      const csvExporter = new ExportToCsv(options);
      csvExporter.generateCsv(data);
    }
  }

  deserializeObject(data, createObject = {}) {
    for (const property in data) {
      if (data[property] instanceof Object) {
        createObject = {
          ...createObject,
          ...this.deserializeObject(data[property], createObject)
        }
      } else {
        createObject[property] = data[property];
      }
    }
    return createObject
  }
}
