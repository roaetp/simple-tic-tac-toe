import React, { useState } from 'react'
import './Game.css'
import Square from './Square'


export default function Game() {
    const [squares, setSquare] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('Start New Game')
    const onClickSquare = (position) => {
        if (squares[position] || calculateWinner(squares)) {
            return;
        }
        console.log(squares)
        const newsq = squares;
        newsq[position] = isXTurn ? 'X' : 'O';
        setSquare(newsq)
        setIsXTurn(!isXTurn)

        if (calculateWinner(newsq)) {
            setStatus(`${isXTurn ? 'X' : 'O'} is a Winner, Play Again`);
        } else {
            setStatus('Game Running');
        }
    }
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }
    const resetGame = () => {
        if (status !== 'Game Running') {
            setSquare(Array(9).fill(null));
            setStatus('Game Running');
        }
    };


    return (
        <div className='game'>
            <h1>Tic-Tac-Toe</h1>
            <button onClick={resetGame}>{status}</button>
            <div className='game-board'>
                <div className='board-row'>
                    <Square value={squares[0]} squareClicked={() => onClickSquare(0)}></Square>
                    <Square value={squares[1]} squareClicked={() => onClickSquare(1)}></Square>
                    <Square value={squares[2]} squareClicked={() => onClickSquare(2)}></Square>
                </div>
                <div className='board-row'>
                    <Square value={squares[3]} squareClicked={() => onClickSquare(3)}></Square>
                    <Square value={squares[4]} squareClicked={() => onClickSquare(4)}></Square>
                    <Square value={squares[5]} squareClicked={() => onClickSquare(5)}></Square>
                </div>
                <div className='board-row'>
                    <Square value={squares[6]} squareClicked={() => onClickSquare(6)}></Square>
                    <Square value={squares[7]} squareClicked={() => onClickSquare(7)}></Square>
                    <Square value={squares[8]} squareClicked={() => onClickSquare(8)}></Square>
                </div>
            </div>

        </div>

    )
}
