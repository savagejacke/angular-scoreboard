import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-start-ninth',
  templateUrl: './game-start-ninth.component.html',
  styleUrls: ['./game-start-ninth.component.css'],
})
export class GameStartNinthComponent implements OnInit {
  player1Named = false;
  player2Named = false;

  constructor() {}

  ngOnInit(): void {}

  onPlayerNamed(val: boolean, player: number) {
    if (player === 1) {
      this.player1Named = val;
    } else {
      this.player2Named = val;
    }
  }
}
