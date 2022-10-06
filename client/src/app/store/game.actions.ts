import { Secondary, SecondaryType } from './../models/secondary';
import { createAction, props } from '@ngrx/store';

export const updatePlayerName = createAction(
  '[player.name] Update Name',
  props<{ name: string; player: number }>()
);

export const updateArmy = createAction(
  '[player.army] Update Army',
  props<{ army: string; player: number }>()
);

export const addSecondary = createAction(
  '[player.secondaries] Add Secondary',
  props<{ secondary: Secondary; player: number }>()
);

export const replaceSecondary = createAction(
  '[player.secondaries] Replace Secondary',
  props<{ secondary: Secondary; idx: number; player: number }>()
);

export const removeSecondary = createAction(
  '[player.secondaries] Remove Secondary',
  props<{ secType: SecondaryType; player: number }>()
);

export const updateSecondaryScore = createAction(
  '[player.secondaries.score] Update Secondary Score',
  props<{ score: number; idx: number; player: number }>()
);

export const updatePrimaryScore = createAction(
  '[player.score] Update Score',
  props<{ primaryScore: number; player: number }>()
);
