import { GameState } from 'src/app/store/game.state';
import { Player } from './../models/player';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectGame = createFeatureSelector<GameState>('game');

export const selectPlayer1 = createSelector(selectGame, (game) => game.player1);

export const selectPlayer2 = createSelector(selectGame, (game) => game.player2);
