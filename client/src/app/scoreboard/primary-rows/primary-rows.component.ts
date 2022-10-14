import { updatePrimaryScore } from './../../store/game.actions';
import { SubSink } from 'subsink';
import { map } from 'rxjs/operators';
import { selectPlayer1, selectPlayer2 } from 'src/app/store/game.selectors';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { GameState } from 'src/app/store/game.state';

@Component({
  selector: 'app-primary-rows',
  templateUrl: './primary-rows.component.html',
  styleUrls: ['./primary-rows.component.css'],
})
export class PrimaryRowsComponent implements OnInit, OnDestroy {
  @Input() playerNumber: number;
  score: number;
  pScores = [0, 0, 0, 0];
  apScores = [0, 0, 0, 0];
  private subs = new SubSink();

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {
    if (this.playerNumber === 1) {
      this.subs.add(
        this.store
          .select(selectPlayer1)
          .pipe(map((player) => player.primaryScore))
          .subscribe((ps) => (this.score = ps))
      );
    } else {
      this.subs.add(
        this.store
          .select(selectPlayer2)
          .pipe(map((player) => player.primaryScore))
          .subscribe((ps) => (this.score = ps))
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  calculateScore() {
    let primaryScore = this.pScores.reduce((count, score) => count + score, 0);
    primaryScore += this.apScores.reduce((count, score) => count + score, 0);

    this.store.dispatch(
      updatePrimaryScore({ primaryScore, player: this.playerNumber })
    );
  }
}
