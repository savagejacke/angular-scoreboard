import { FormControl } from '@angular/forms';
import { Secondary } from './../../models/secondary';
import { selectPlayer1, selectPlayer2 } from 'src/app/store/game.selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { GameState } from 'src/app/store/game.state';
import { map } from 'rxjs/operators';
import { updateSecondaryScore } from 'src/app/store/game.actions';

@Component({
  selector: 'app-secondary-row',
  templateUrl: './secondary-row.component.html',
  styleUrls: ['./secondary-row.component.css'],
})
export class SecondaryRowComponent implements OnInit, OnDestroy {
  @Input() playerNumber: number;
  @Input() idx: number;
  secondary: Secondary;
  scores = [0, 0, 0, 0, 0];
  private subs = new SubSink();

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {
    if (this.playerNumber === 1) {
      this.subs.add(
        this.store
          .select(selectPlayer1)
          .pipe(map((player) => player.secondaries[this.idx]))
          .subscribe((sec) => (this.secondary = sec))
      );
    } else {
      this.store
        .select(selectPlayer2)
        .pipe(map((player) => player.secondaries[this.idx]))
        .subscribe((sec) => (this.secondary = sec));
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onScoreChange() {
    let score = this.scores.reduce((val, score) => val + score, 0);
    this.store.dispatch(
      updateSecondaryScore({ score, idx: this.idx, player: this.playerNumber })
    );
  }

  showActionInputs() {
    return (
      this.secondary.title === 'Retrieve Nephilim Data' ||
      this.secondary.title === 'Warp Ritual'
    );
  }

  showNPInputs() {
    return this.secondary.title === 'No Prisoners';
  }
}
