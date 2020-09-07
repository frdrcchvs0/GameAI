const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { TicTacToe, play } = require("../../engines/tic_tac_toe");

Given('a new board', function () {
    this.board = new TicTacToe();
  });

  When('I play {int}, {int}', function (row, column) {
      this.board.play(row, column, 1);
  });

  Then('the board should look like {string}', function (expected) {
      assert.equal(this.board.toString(), expected);
  });
