import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
  static defaultProps = {
    toss: ['head', 'tail']
  };
  constructor(props) {
    super(props);
    this.state = { bo: [], count: 0, noheads: 0, notails: 0, face: '' };
  }
  flipping = () => {
    var rannum = Math.floor(Math.random() * this.props.toss.length);
    var nheads = this.state.noheads;
    var ntail = this.state.notails;
    this.setState({
      bo: [...this.state.bo, rannum],
      noheads: rannum === 1 ? nheads + 1 : nheads,
      notails: rannum === 0 ? ntail + 1 : ntail,
      count: this.state.count + 1,
      face: rannum === 1 ? 'headImage' : 'tailImage'
    });

    console.log(this.state.count);
    console.log(`sndf${this.state.noheads} ${this.state.bo}`);
  };
  render() {
    return (
      <div>
        <Coin tossing={this.state.face} side={this.state.face} />
        <button onClick={this.flipping}>Flip</button>
        <h4>Numberof Clicks:-{this.state.count}</h4>
        <h4>Heads:-{this.state.noheads}</h4>
        <h4>Tails:-{this.state.notails}</h4>
      </div>
    );
  }
}

export default CoinFlip;
