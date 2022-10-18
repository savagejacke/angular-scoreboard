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

  ngOnInit(): void {
    this.refreshResults();
  }

  refreshResults() {
    this.resultsService.getResults().subscribe((r) => (this.results = r));
  }
}
