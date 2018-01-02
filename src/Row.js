import React, { Component } from 'react';

class Row extends Component {
  
  
  render() {
    return (
      <div className="Row">
        {this.props.row.map((cell) => <div className='cell' onClick={() => this.props.handleClick(this.props.indexRow, cell)}></div>)}
      </div>
    );
  }
}

export default Row;
