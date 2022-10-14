import { updateSecondaryScore } from './../../../store/game.actions';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { GameState } from 'src/app/store/game.state';

@Component({
  selector: 'app-action-inputs',
  templateUrl: './action-inputs.component.html',
  styleUrls: ['./action-inputs.component.css'],
})
export class ActionInputsComponent implements OnInit {
  @Input() playerNumber: number;
  @Input() idx: number;
  @Input() title: string;
  checkboxes = [
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
  ];

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {}

  calculateScore() {
    let score = this.checkboxes.reduce(
      (count, fc) => (fc.value ? count + 1 : count),
      0
    );
    switch (this.title) {
      case 'Retrieve Nephilim Data':
        score = Math.max(0, (score - 1) * 4);
        break;
      case 'Warp Ritual':
        if (score < 1) score = 0;
        else if (score === 1) score = 3;
        else if (score === 2) score = 7;
        else score = 12; // score >= 3
        break;
      default:
        return;
    }

    this.store.dispatch(
      updateSecondaryScore({ score, idx: this.idx, player: this.playerNumber })
    );
  }
}
