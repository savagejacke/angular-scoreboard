import { ResultsComponent } from './results/results.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { GameStartNinthComponent } from './game-start-ninth/game-start-ninth.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gamestartninth', component: GameStartNinthComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
