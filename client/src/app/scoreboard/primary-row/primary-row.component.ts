import { FormControl } from '@angular/forms';
import { updatePrimaryScore } from './../../store/game.actions';
import { selectPlayer1, selectPlayer2 } from './../../store/game.selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { GameState } from 'src/app/store/game.state';

@Component({
  selector: 'app-primary-row',
  templateUrl: './primary-row.component.html',
  styleUrls: ['./primary-row.component.css'],
})
export class PrimaryRowComponent implements OnInit, OnDestroy {
  @Input() playerNumber: number;
  primaryScore: number;
  pScores = [
    new FormControl(0),
    new FormControl(0),
    new FormControl(0),
    new FormControl(0),
  ];
  secScores = [
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
          .subscribe((player) => (this.primaryScore = player.primaryScore))
      );
    } else {
      this.subs.add(
        this.store
          .select(selectPlayer2)
          .subscribe((player) => (this.primaryScore = player.primaryScore))
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  calculateTotalScore() {
    let score = this.pScores.reduce(
      (total, curr) => total + (curr.value ? curr.value : 0),
      0
    );
    score += this.secScores.reduce(
      (total, curr) => total + (curr.value ? curr.value : 0),
      0
    );
    this.store.dispatch(
      updatePrimaryScore({ primaryScore: score, player: this.playerNumber })
    );
  }
}
