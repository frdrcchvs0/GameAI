exports.TicTacToe = class {
    _cells = new Array(9).fill(0);

    clear() {
         this._cells.fill(0);
    }

    play(row, column, value) {
        this._cells[row * 3 + column] = value;
    }

    toString() {
        return this._cells.join('');
    }
}
