Feature: Tic Tac Toe
  Teaching how to play tic tac toe

  Scenario Outline: Given a new tic tac toe engine, after one turn, the board should show what was played
    Given a new board
    When I play <row>, <column>
    Then the board should look like "<board>"

    Examples:
      | row | column | board     |
      | 0   | 0      | 100000000 |
      | 1   | 1      | 000010000 |
      | 2   | 2      | 000000001 |
