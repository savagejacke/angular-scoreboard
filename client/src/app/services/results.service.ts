import { ResultDto } from './../models/resultdto';
import { environment } from './../../environments/environment';
import { Result } from './../models/result';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getResults() {
    return this.http.get<Result[]>(this.apiUrl + '/ninth');
  }

  getResult(id: number) {
    return this.http.get<Result>(this.apiUrl + `/ninth/${id}`);
  }

  createResult(dto: ResultDto) {
    return this.http.post<Result>(this.apiUrl + '/ninth', dto);
  }
}
