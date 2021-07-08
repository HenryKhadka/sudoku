const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Solver {
    constructor(boardJSON) {
        //let parsed = JSON.parse(boardJSON);
        //this.board = parsed.board;
        console.log("Solver object created");
        console.log(boardJSON);

        this.board = boardJSON;
        this.original = boardJSON;
        console.log(this.board);
    }
    solve() {
        let nextEmpty = this.findEmpty();
        if (nextEmpty === false) {
            return true;
        }
        let row = nextEmpty[0];
        let col = nextEmpty[1];

        for (var i = 0; i < nums.length; i++) {
            if (this.valid(nums[i], row, col)) {
                this.board[row][col] = nums[i];
                //console.log(this.board);
                if (this.solve()) {
                    return true;
                }
            }
            this.board[row][col] = 0;
        }

        return false;
    }

    findEmpty() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (this.board[i][j] === 0) {
                    return [i, j];
                }
            }
        }
        return false;
    }

    valid(num, row, col) {
        return (
            this.checkRow(num, row) &&
            this.checkCol(num, col) &&
            this.checkGrid(num, row, col)
        );
    }

    checkRow(num, row) {
        for (var i = 0; i < 9; i++) {
            if (this.board[row][i] === num) {
                return false;
            }
        }
        return true;
    }

    checkCol(num, col) {
        for (var i = 0; i < 9; i++) {
            if (this.board[i][col] === num) {
                return false;
            }
        }
        return true;
    }

    checkGrid(num, row, col) {
        let baseRow = Math.floor(row / 3) * 3;
        let baseCol = Math.floor(col / 3) * 3;

        for (var i = 0; i < 3; i++) {
            let dummyCol = baseCol + i;
            for (var j = 0; j < 3; j++) {
                if (this.board[baseRow + j][dummyCol] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    publicSolve() {
        this.solve();
    }
}
