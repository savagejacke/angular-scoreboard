import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../models/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results: Result[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {}

  onClick() {
    this.resultsService.getResult(1).subscribe((r) => (this.results[0] = r));
  }
}
