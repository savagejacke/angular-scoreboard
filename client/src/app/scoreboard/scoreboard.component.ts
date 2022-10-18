import { ResultsService } from './../services/results.service';
import { ResultDto } from './../models/resultdto';
import { SubSink } from 'subsink';
import { selectPlayer1, selectPlayer2 } from './../store/game.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../models/player';
import { GameState } from '../store/game.state';
import { Router } from '@angular/router';

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
  numberOfRounds = 0;
  description = '';
  private subs = new SubSink();

  constructor(
    private store: Store<GameState>,
    private resultsService: ResultsService,
    private router: Router
  ) {}

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

  onLogGameClick() {
    let a1 = this.player1.army;
    let a2 = this.player2.army;
    let dto: ResultDto = {
      player1Name: this.player1.name,
      player1Army: a1.includes('-') ? a1.substring(a1.indexOf('-') + 2) : a1,
      player1Score: this.p1Score,
      player2Name: this.player2.name,
      player2Army: a2.includes('-') ? a2.substring(a2.indexOf('-') + 2) : a2,
      player2Score: this.p2Score,
      numberOfRounds: this.numberOfRounds,
      description: this.description,
    };
    this.resultsService
      .createResult(dto)
      .subscribe((_) => this.router.navigateByUrl('/results'));
  }

  private calculateTotalScore(player: Player) {
    let score = player.primaryScore;
    score += player.secondaries.reduce((val, sec) => val + sec.score, 0);
    return score;
  }
}
