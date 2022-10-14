import { gameReducer } from './store/game.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameStartNinthComponent } from './game-start-ninth/game-start-ninth.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ResultsComponent } from './results/results.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { NinthFormComponent } from './game-start-ninth/ninth-form/ninth-form.component';
import { GameStartButtonComponent } from './game-start-ninth/game-start-button/game-start-button.component';
import { ScoreboardGridComponent } from './scoreboard/scoreboard-grid/scoreboard-grid.component';
import { SecondaryRowComponent } from './scoreboard/secondary-row/secondary-row.component';
import { PrimaryRowsComponent } from './scoreboard/primary-rows/primary-rows.component';
import { ActionInputsComponent } from './scoreboard/secondary-row/action-inputs/action-inputs.component';
import { NoPrisonersRowComponent } from './scoreboard/secondary-row/no-prisoners-row/no-prisoners-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GameStartNinthComponent,
    ScoreboardComponent,
    ResultsComponent,
    NavbarComponent,
    NinthFormComponent,
    GameStartButtonComponent,
    ScoreboardGridComponent,
    SecondaryRowComponent,
    PrimaryRowsComponent,
    ActionInputsComponent,
    NoPrisonersRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ game: gameReducer }),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
