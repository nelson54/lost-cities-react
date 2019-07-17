/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { Game } from "boardgame.io/core";
import createDeck from "./cards/DeckFactory";
import PlayerState from "./PlayerState";

function findWinningPlayer(players) {

}

const LostCities = Game({
  name: "Lost Cities",

  setup: (ctx, setupData) => {
    let state = {
      currentPlayer: 0,
      actionPlayers: [0],
      playOrder: []
    };
    state.deck = ctx.random.Shuffle(createDeck());

    state.player1 = new PlayerState('Player 1');
    state.playOrder.push(state.player1);

    state.player2 = new PlayerState('Player 2');
    state.playOrder.push(state.player2);

    state.playOrder.forEach((player) => {
      [0, 1, 2, 3, 4, 5, 6].forEach(() => {
        let card = state.deck.shift();
        player.hand.push(card);
      })
    });

    return state
  },

  moves: {
    draw(G, ctx, id) {
      let card = G.deck.shift();
      let currentPlayer = G.playOrder[G.currentPlayer];
      currentPlayer.hand.unshift(card);
    },
    play(G, ctx, card) {
      let currentPlayer = G.playOrder[G.currentPlayer];
      currentPlayer.hand.unshift(card);
    }
  },

  flow: {
    movesPerTurn: 2,

    endGameIf: (G, ctx) => {
      if (G.deck.length === 0) {
        if(G.player1.currentScore() === G.player2.currentScore()) {
          return { draw: true };
        }

        return G.playOrder.sort((a, b) => a.currentScore() - b.currentScore())[0];
      }
    }
  }
});

export default LostCities;
