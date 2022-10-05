import { selectPlayer1, selectPlayer2 } from './../../store/game.selectors';
import { GameState } from './../../store/game.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-start-button',
  templateUrl: './game-start-button.component.html',
  styleUrls: ['./game-start-button.component.css'],
})
export class GameStartButtonComponent implements OnInit {
  p1Ready = false;
  p2Ready = false;

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {
    this.store
      .select(selectPlayer1)
      .subscribe(
        (player1) =>
          (this.p1Ready =
            player1.name.length > 0 &&
            player1.army.length > 0 &&
            player1.secondaries.length === 3)
      );
    this.store
      .select(selectPlayer2)
      .subscribe(
        (player2) =>
          (this.p2Ready =
            player2.name.length > 0 &&
            player2.army.length > 0 &&
            player2.secondaries.length === 3)
      );
  }
}
