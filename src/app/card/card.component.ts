import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(600, style({opacity: 0}))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() number: { number: number, show: boolean, selected: string };
  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCardClick() {
    this.cardClicked.emit();
  }
}
