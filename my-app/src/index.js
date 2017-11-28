import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {

  //add a constructor for Square
  constructor(props) {
    super(props);//need when defining constructor of a subclass
    //React components can have state 
    this.state = {
      value: null,//store state and change it when clicked
    };
  }


  render() {
    return (
    //if click square, call this.setState
    //this.setState updates the component by "rerendering"
    //
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}


//parent of Square class
//can shift the state of each Square up into this parent

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }


  
  //define function to be used later
  //renderSquare(i) returns the value of the given square
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

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
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
