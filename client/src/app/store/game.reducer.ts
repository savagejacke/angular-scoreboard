import {
  updatePlayerName,
  updateArmy,
  addSecondary,
  replaceSecondary,
  updateSecondaryScore,
  updatePrimaryScore,
  removeSecondary,
} from './game.actions';
import { createReducer, on } from '@ngrx/store';
import { GameState } from './game.state';

export const initialState: GameState = {
  player1: {
    name: '',
    army: '',
    secondaries: [],
    primaryScore: 0,
  },
  player2: {
    name: '',
    army: '',
    secondaries: [],
    primaryScore: 0,
  },
};

export const gameReducer = createReducer(
  initialState,
  on(updatePlayerName, (state, { name, player }) => {
    if (player === 1) {
      return { player1: { ...state.player1, name }, player2: state.player2 };
    }
    return { player1: state.player1, player2: { ...state.player2, name } };
  }),
  on(updateArmy, (state, { army, player }) => {
    if (player === 1) {
      return { player1: { ...state.player1, army }, player2: state.player2 };
    }
    return { player1: state.player1, player2: { ...state.player2, army } };
  }),
  on(addSecondary, (state, { secondary, player }) => {
    if (player === 1) {
      return {
        player1: {
          ...state.player1,
          secondaries: [...state.player1.secondaries, secondary],
        },
        player2: state.player2,
      };
    }
    return {
      player1: state.player1,
      player2: {
        ...state.player2,
        secondaries: [...state.player2.secondaries, secondary],
      },
    };
  }),
  on(replaceSecondary, (state, { secondary, idx, player }) => {
    const p1 = player === 1;
    const secondaries = p1
      ? state.player1.secondaries
      : state.player2.secondaries;
    const newSecondaries = secondaries.map((sec, i) => {
      if (i === idx) return secondary;
      return sec;
    });
    if (p1) {
      return {
        player1: {
          ...state.player1,
          secondaries: newSecondaries,
        },
        player2: state.player2,
      };
    }
    return {
      player1: state.player1,
      player2: { ...state.player2, secondaries: newSecondaries },
    };
  }),
  on(removeSecondary, (state, { secType, player }) => {
    const p1 = player === 1;
    const secondaries = p1
      ? state.player1.secondaries
      : state.player2.secondaries;
    const newSecondaries = secondaries.filter((sec) => sec.type !== secType);
    if (p1) {
      return {
        player1: {
          ...state.player1,
          secondaries: newSecondaries,
        },
        player2: state.player2,
      };
    }
    return {
      player1: state.player1,
      player2: { ...state.player2, secondaries: newSecondaries },
    };
  }),
  on(updateSecondaryScore, (state, { score, idx, player }) => {
    const p1 = player === 1;
    const secondaries = p1
      ? state.player1.secondaries
      : state.player2.secondaries;
    const newSecondaries = secondaries.map((sec, i) => {
      if (i === idx) return { ...sec, score };
      return sec;
    });
    if (p1) {
      return {
        player1: {
          ...state.player1,
          secondaries: newSecondaries,
        },
        player2: state.player2,
      };
    }
    return {
      player1: state.player1,
      player2: { ...state.player2, secondaries: newSecondaries },
    };
  }),
  on(updatePrimaryScore, (state, { primaryScore, player }) => {
    if (player === 1) {
      return {
        player1: { ...state.player1, primaryScore },
        player2: state.player2,
      };
    }
    return {
      player1: state.player1,
      player2: { ...state.player2, primaryScore },
    };
  })
);
