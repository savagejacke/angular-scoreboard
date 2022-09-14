import { Player } from './../models/player';
import { createFeatureSelector } from '@ngrx/store';

export const selectPlayer1 = createFeatureSelector<Player>('player1');

export const selectPlayer2 = createFeatureSelector<Player>('player2');
