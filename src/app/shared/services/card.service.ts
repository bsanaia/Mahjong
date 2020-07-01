import {Injectable} from '@angular/core';
import * as helper from '../helpers/helper';

@Injectable({providedIn: 'root'})
export class CardService {
  constructor() {
  }

  generateCards() {
    return [...helper.generatePrimes(50)];
  }
}
