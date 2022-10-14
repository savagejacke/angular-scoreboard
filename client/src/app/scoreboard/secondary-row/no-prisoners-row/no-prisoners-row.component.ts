import { updateSecondaryScore } from './../../../store/game.actions';
import { GameState } from 'src/app/store/game.state';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-prisoners-row',
  templateUrl: './no-prisoners-row.component.html',
  styleUrls: ['./no-prisoners-row.component.css'],
})
export class NoPrisonersRowComponent implements OnInit {
  @Input() playerNumber: number;
  @Input() idx: number;
  turn1 = 0;
  turn2 = 0;
  turn3 = 0;
  turn4 = 0;
  turn5 = 0;

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {}

  calculateScore() {
    let killPoints =
      this.turn1 + this.turn2 + this.turn3 + this.turn4 + this.turn5;
    let score = Math.floor(killPoints / 10);
    if (killPoints >= 50) score++;
    if (killPoints > 99) score++;

    this.store.dispatch(
      updateSecondaryScore({ score, idx: this.idx, player: this.playerNumber })
    );
  }
}
