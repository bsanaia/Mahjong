import { Component, OnInit } from '@angular/core';
import {CardService} from '../shared/services/card.service';
import * as helper from '../shared/helpers/helper';
import {Store} from '@ngrx/store';
import * as CardActions from './store/card.actions';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  primeNumbers = [];
  randomNumbers = [];
  randomNumbersInState = [];
  state: any;
  disabled = false;

  constructor(private cardService: CardService,
              private store: Store<any>) {
  }

  ngOnInit(): void {
    this.primeNumbers = this.cardService.generateCards();
    const shuffledArr = helper.shuffleArray([...this.primeNumbers, ...this.primeNumbers]);
    shuffledArr.forEach(num => {
      this.randomNumbers.push({number: num, show: true, selected: 'none'});
    });
    this.store.dispatch(new CardActions.AddNumbers(this.randomNumbers));
    this.store.select('card').subscribe(data => {
      this.state = data;
      this.randomNumbersInState = data.numbers;
    });

    setTimeout(() => {
      for (let index = 0; index < this.randomNumbers.length; index++) {
        this.store.dispatch(new CardActions.ToggleShow({
          index,
          show: false,
          selected: 'none',
        }));
      }
    }, 4000);
  }

  showNumber(index: number) {
    if (this.disabled) {
      return;
    }
    if (this.randomNumbersInState[index].selected === 'always') {
      return;
    }
    this.store.dispatch(new CardActions.ToggleShow({index, show: true, selected: 'yet'}));
    const values = this.randomNumbersInState.filter(el => el.selected === 'yet');

    if (values.length === 2) {
      this.disabled = true;
      const val1 = values[0];
      const idx1 = this.randomNumbersInState.indexOf(val1);
      const val2 = values[1];
      const idx2 = this.randomNumbersInState.indexOf(val2);
      console.log(val1.number, val2.number);
      if (val1.number === val2.number) {
        this.store.dispatch(new CardActions.ToggleShow({index: idx1, show: true, selected: 'always'}));
        this.store.dispatch(new CardActions.ToggleShow({index: idx2, show: true, selected: 'always'}));
        this.disabled = false;
      } else {
        setTimeout(() => {
          this.store.dispatch(new CardActions.ToggleShow({index: idx1, show: false, selected: 'none'}));
          this.store.dispatch(new CardActions.ToggleShow({index: idx2, show: false, selected: 'none'}));
          this.disabled = false;
        }, 800);
      }
    }
  }
}
