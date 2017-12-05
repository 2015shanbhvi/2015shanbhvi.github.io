import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './tic_tac_toe.css';

//Tic Tac Toe

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


//parent of Square class
//can shift the state of each Square up into this parent

class Board extends React.Component {

  constructor(props) {
    super(props);
    //set Board's initial state to an array of 9 NULLs
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }



handleClick(i) {
  //slice() copies the array instead of modifying the current one
  //bc we want to observe prior to modifying data
    const squares = this.state.squares.slice();
    //check winners by comparing with calling calculateWinner
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });


  }


  //define function to be used later
  //renderSquare(i) returns the value of the given square
  renderSquare(i) {
    return <Square 
      value = {this.state.squares[i]} 
      //pass down function from Board to Square 
      //that gets called when Square is clicked
      onClick = {() => this.handleClick(i)}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      //reset the board
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}






