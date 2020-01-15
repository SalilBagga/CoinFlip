import React, { Component } from 'react';
import headImage from './5-rupees-2011-obverse.png';
import tailImage from './5-rupees-2011-reverse.png';

class Coin extends Component {
  render() {
    let source = ``;
    return (
      <div>
        <h1>hi</h1>
        <img src={headImage} alt="face" />
      </div>
    );
  }
}

export default Coin;
