import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {


  formatNumber(number) {
    return number.replace(/[^\d]+/g, '')
      .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

}
