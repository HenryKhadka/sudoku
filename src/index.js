import React, { useState } from "react";
import ReactDOM from "react-dom";
import Solver from "./solver.js";
import "./styles.css";
const axios = require("axios");

/* axios
    .get("https://sugoku.herokuapp.com/board?difficulty=easy")
    .then((response) => {
        console.log(response.data.board);
    })
    .catch((error) => {
        console.log(error);
    });
 */
const testPuzzle = [
    [0, 0, 0, 0, 0, 9, 7, 4, 1],
    [0, 3, 0, 7, 0, 2, 0, 0, 8],
    [0, 4, 0, 6, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 9, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 2, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 4, 0, 8, 0],
    [4, 0, 0, 3, 0, 7, 0, 5, 0],
    [6, 7, 3, 9, 0, 0, 0, 0, 0],
];
/* for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        if (testPuzzle[i][j] === 0) {
            testPuzzle[i][j] = null;
        }
    }
} */

const SudukoBoard = ({ puzzleGrid }) => (
    <table className="sudoku">
        <tbody>
            {puzzleGrid.map((row) => (
                <tr>
                    {row.map((cell) => (
                        <td>
                            <input type="text" value={cell === 0 ? "" : cell} />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

function SudokuGame({ board }) {
    const [puzzle, setPuzzle] = useState(board);
    const solveObject = new Solver(puzzle);
    function solve() {
        console.log("pressed solve button");
        solveObject.solve();
        setPuzzle([...puzzle]);
    }

    function newPuzzle() {
        axios
            .get("https://sugoku.herokuapp.com/board?difficulty=easy")
            .then((response) => {
                console.log(response.data.board);
                setPuzzle(response.data.board);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="game">
            <h1>Sudoku Solver</h1>
            <SudukoBoard puzzleGrid={puzzle} />
            <div className="buttons">
                <button onClick={solve}>Solve It!</button>
                {/* <button onClick={() => console.log(puzzle)}>
                    Show Current Puzzle
                </button>
                <button onClick={() => console.log(board)}>
                    Show input Puzzle
                </button> */}
                <button onClick={newPuzzle}>New Puzzle</button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <SudokuGame board={testPuzzle} />,
    document.getElementById("root")
);
