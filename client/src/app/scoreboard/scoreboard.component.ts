import { SubSink } from 'subsink';
import { selectPlayer1, selectPlayer2 } from './../store/game.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../models/player';
import { GameState } from '../store/game.state';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  player1: Player;
  player2: Player;
  p1Score = 0;
  p2Score = 0;
  private subs = new SubSink();

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {
    this.subs.add(
      this.store.select(selectPlayer1).subscribe((player) => {
        this.player1 = player;
        this.p1Score = this.calculateTotalScore(this.player1);
      }),
      this.store.select(selectPlayer2).subscribe((player) => {
        this.player2 = player;
        this.p2Score = this.calculateTotalScore(this.player2);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private calculateTotalScore(player: Player) {
    let score = player.primaryScore;
    score += player.secondaries.reduce((val, sec) => val + sec.score, 0);
    return score;
  }
}
