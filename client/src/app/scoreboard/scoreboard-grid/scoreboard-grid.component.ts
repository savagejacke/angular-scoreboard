import {
  updatePrimaryScore,
  updateSecondaryScore,
} from './../../store/game.actions';
import { selectPlayer1, selectPlayer2 } from './../../store/game.selectors';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { GameState } from 'src/app/store/game.state';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-scoreboard-grid',
  templateUrl: './scoreboard-grid.component.html',
  styleUrls: ['./scoreboard-grid.component.css'],
})
export class ScoreboardGridComponent implements OnInit {
  @Input() playerNumber: number;
  player: Player;
  pScores = [
    new FormControl(0),
    new FormControl(0),
    new FormControl(0),
    new FormControl(0),
  ];
  apScores = [
    new FormControl(0),
    new FormControl(0),
    new FormControl(0),
    new FormControl(0),
  ];
  private subs = new SubSink();

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {
    if (this.playerNumber === 1) {
      this.subs.add(
        this.store
          .select(selectPlayer1)
          .subscribe((player1) => (this.player = player1))
      );
    } else {
      this.subs.add(
        this.store
          .select(selectPlayer2)
          .subscribe((player2) => (this.player = player2))
      );
    }
  }

  calculatePrimaryScore() {
    let primaryScore = this.pScores.reduce(
      (val, fc) => val + (fc.value || 0),
      0
    );
    primaryScore += this.apScores.reduce((val, fc) => val + (fc.value || 0), 0);
    this.store.dispatch(
      updatePrimaryScore({ primaryScore, player: this.playerNumber })
    );
  }
}
