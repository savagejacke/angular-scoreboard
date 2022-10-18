import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-game-result-row',
  templateUrl: './game-result-row.component.html',
  styleUrls: ['./game-result-row.component.css'],
})
export class GameResultRowComponent implements OnInit {
  @Input() result: Result;
  winner = '';
  date = '';

  constructor() {}

  ngOnInit(): void {
    if (this.result.player1Score > this.result.player2Score) {
      this.winner = this.result.player1Name;
    } else if (this.result.player1Score < this.result.player2Score) {
      this.winner = this.result.player2Name;
    } else this.winner = 'Tie';
  }
}
