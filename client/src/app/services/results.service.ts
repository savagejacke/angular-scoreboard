import { SubSink } from 'subsink';
import { selectPlayer1, selectPlayer2 } from './../store/game.selectors';
import { ResultDto } from './../models/resultdto';
import { Store } from '@ngrx/store';
import { environment } from './../../environments/environment';
import { Result } from './../models/result';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameState } from '../store/game.state';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private store: Store<GameState>) {}

  getResults() {
    return this.http.get<Result[]>(this.apiUrl + '/ninth');
  }

  getResult(id: number) {
    return this.http.get<Result>(this.apiUrl + `/ninth/${id}`);
  }

  createResult(numberOfRounds: number, description: string) {
    let player1Name = '';
    let player1Army = '';
    let player1Score = 0;
    let player2Name = '';
    let player2Army = '';
    let player2Score = 0;
    let subs = new SubSink();
    subs.add(
      this.store.select(selectPlayer1).subscribe((player) => {
        player1Name = player.name;
        player1Army = player.army;
        player1Score = player.secondaries.reduce(
          (count, curr) => count + curr.score,
          player.primaryScore
        );
      }),
      this.store.select(selectPlayer2).subscribe((player) => {
        player2Name = player.name;
        player2Army = player.army;
        player2Score = player.secondaries.reduce(
          (count, curr) => count + curr.score,
          player.primaryScore
        );
      })
    );
    subs.unsubscribe();
    let dto: ResultDto = {
      player1Name,
      player1Army,
      player1Score,
      player2Name,
      player2Army,
      player2Score,
      numberOfRounds,
      description,
    };

    let worked = false;
    this.http
      .post(this.apiUrl + '/ninth', dto)
      .subscribe((r) => (worked = r ? true : false));
    return worked;
  }
}
