import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard-grid',
  templateUrl: './scoreboard-grid.component.html',
  styleUrls: ['./scoreboard-grid.component.css'],
})
export class ScoreboardGridComponent implements OnInit {
  @Input() player: number;

  constructor() {}

  ngOnInit(): void {}
}
