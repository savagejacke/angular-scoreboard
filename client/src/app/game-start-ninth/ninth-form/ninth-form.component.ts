import { updateArmy } from './../../store/game.actions';
import { Store } from '@ngrx/store';
import { Player } from './../../models/player';
import { Component, Input, OnInit } from '@angular/core';
import { GameState } from 'src/app/store/game.state';
import { selectPlayer1, selectPlayer2 } from 'src/app/store/game.selectors';
import { updatePlayerName } from 'src/app/store/game.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ninth-form',
  templateUrl: './ninth-form.component.html',
  styleUrls: ['./ninth-form.component.css'],
})
export class NinthFormComponent implements OnInit {
  @Input() playerNumber: number;
  player: Player;
  player$: Observable<Player>;

  constructor(private store: Store<GameState>) {
    // if (this.playerNumber === 1) {
    //   console.log(this.playerNumber);
    //   this.player$ = this.store.select(selectPlayer1);
    // } else {
    //   this.player$ = this.store.select(selectPlayer2);
    //   console.log(this.playerNumber);
    // }
  }

  ngOnInit(): void {
    if (this.playerNumber === 1) {
      console.log(this.playerNumber);
      this.store
        .select(selectPlayer1)
        .subscribe((player1) => (this.player = player1));
    } else {
      this.store
        .select(selectPlayer2)
        .subscribe((player2) => (this.player = player2));
      console.log(this.playerNumber);
    }
  }

  onClick() {
    this.store.dispatch(
      updatePlayerName({ name: 'Jack Savage', player: this.playerNumber })
    );
    this.store.dispatch(
      updateArmy({ army: 'Space Marines', player: this.playerNumber })
    );
    console.log('Clicked');
  }
}
