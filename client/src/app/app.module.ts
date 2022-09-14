import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameStartNinthComponent } from './game-start-ninth/game-start-ninth.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ResultsComponent } from './results/results.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GameStartNinthComponent,
    ScoreboardComponent,
    ResultsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
