import React, { Component } from 'react';
import './App.css';
import Row from './Row.js';

class App extends Component {
  state = {
    board: [[0, 1, 2], 
            [0, 1, 2], 
            [0, 1, 2]],
    player1: '',
    player2: '',
  }

  handleClick = this.handleClick.bind(this);
  handlePlayer = this.handlePlayer.bind(this);

  handleClick(row, col) {
    console.log('clicked!', row, col)
  }

  handlePlayer(e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(this.state.name)
    this.setState({name: this.state.name + value});
  }
  
  render() {
    return (
      <div className="App">
        player1<input type='text' name='player1' value={this.state.player1} onChange={this.handlePlayer}/>
        player2<input type='text' name='player2' value={this.state.player2}/>
        {this.state.board.map((row) => <Row key={this.state.board.indexOf(row)} indexRow={this.state.board.indexOf(row)} row={row} handleClick={this.handleClick} />)}
      </div>
    );
  }
}

export default App;
