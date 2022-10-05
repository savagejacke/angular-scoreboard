import { SECONDARIES } from './../../data/Secondaries';
import { Secondary, SecondaryType } from './../../models/secondary';
import {
  updateArmy,
  addSecondary,
  replaceSecondary,
  removeSecondary,
} from './../../store/game.actions';
import { Store } from '@ngrx/store';
import { Player } from './../../models/player';
import { Component, Input, OnInit } from '@angular/core';
import { GameState } from 'src/app/store/game.state';
import { selectPlayer1, selectPlayer2 } from 'src/app/store/game.selectors';
import { updatePlayerName } from 'src/app/store/game.actions';
import { FormControl } from '@angular/forms';
import { ARMIES } from 'src/app/data/armies';

@Component({
  selector: 'app-ninth-form',
  templateUrl: './ninth-form.component.html',
  styleUrls: ['./ninth-form.component.css'],
})
export class NinthFormComponent implements OnInit {
  @Input() playerNumber: number;
  player: Player;
  named = false;
  enteredName = new FormControl('');
  armies = ARMIES;
  pte: Secondary[];
  nmnr: Secondary[];
  wc: Secondary[];
  bs: Secondary[];
  so: Secondary[];
  disablePte = false;
  disableNmnr = false;
  disableWc = false;
  disableBs = false;
  disableSo = false;

  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {
    // Subscribe to player 1 or 2
    if (this.playerNumber === 1) {
      this.store
        .select(selectPlayer1)
        .subscribe((player1) => (this.player = player1));
    } else {
      this.store
        .select(selectPlayer2)
        .subscribe((player2) => (this.player = player2));
    }
    if (this.player.name) this.named = true;
    this.updateSecondaryArrays();
  }

  onNameFormSubmit() {
    this.named = true;
    this.store.dispatch(
      updatePlayerName({
        name: this.enteredName.value || '',
        player: this.playerNumber,
      })
    );
  }

  onArmyChange(e: any) {
    let army = e.target.value;
    this.store.dispatch(updateArmy({ army, player: this.playerNumber }));
    this.updateSecondaryArrays();
  }

  onSecondarySelect(e: Event, type: SecondaryType) {
    const title = (e.target as HTMLSelectElement).value;
    const secondary = SECONDARIES.find((sec) => sec.title === title);
    if (!secondary) {
      this.store.dispatch(
        removeSecondary({ secType: type, player: this.playerNumber })
      );
      this.updateSecondaryDisable();
      return;
    }
    const idx = this.player.secondaries.findIndex(
      (sec) => sec.type === secondary.type
    );

    if (idx === -1) {
      this.store.dispatch(
        addSecondary({ secondary, player: this.playerNumber })
      );
    } else {
      this.store.dispatch(
        replaceSecondary({ secondary, idx, player: this.playerNumber })
      );
    }

    this.updateSecondaryDisable();
  }

  private updateSecondaryArrays() {
    this.pte = SECONDARIES.filter(
      (sec) =>
        sec.type === 'Purge The Enemy' &&
        (sec.armyRequirement === 'None' ||
          sec.armyRequirement === this.player.army)
    );
    this.nmnr = SECONDARIES.filter(
      (sec) =>
        sec.type === 'No Mercy, No Respite' &&
        (sec.armyRequirement === 'None' ||
          sec.armyRequirement === this.player.army)
    );
    this.wc = SECONDARIES.filter(
      (sec) =>
        sec.type === 'Warpcraft' &&
        (sec.armyRequirement === 'None' ||
          sec.armyRequirement === this.player.army)
    );
    this.bs = SECONDARIES.filter(
      (sec) =>
        sec.type === 'Battlefield Supremacy' &&
        (sec.armyRequirement === 'None' ||
          sec.armyRequirement === this.player.army)
    );
    this.so = SECONDARIES.filter(
      (sec) =>
        sec.type === 'Shadow Operations' &&
        (sec.armyRequirement === 'None' ||
          sec.armyRequirement === this.player.army)
    );
  }

  private updateSecondaryDisable() {
    if (this.player.secondaries.length < 3) {
      this.disablePte = false;
      this.disableNmnr = false;
      this.disableWc = false;
      this.disableBs = false;
      this.disableSo = false;
      return;
    }

    this.disablePte = !this.player.secondaries.some(
      (sec) => sec.type === 'Purge The Enemy'
    );
    this.disableNmnr = !this.player.secondaries.some(
      (sec) => sec.type === 'No Mercy, No Respite'
    );
    this.disableWc = !this.player.secondaries.some(
      (sec) => sec.type === 'Warpcraft'
    );
    this.disableBs = !this.player.secondaries.some(
      (sec) => sec.type === 'Battlefield Supremacy'
    );
    this.disableSo = !this.player.secondaries.some(
      (sec) => sec.type === 'Shadow Operations'
    );
  }
}
