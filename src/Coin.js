import React, { Component } from 'react';

class Coin extends Component {
  render() {
    let check = this.props.tossing;
    console.log(this.props.tossing);
    return (
      <div>
        <img
          src={
            check === 'headImage'
              ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReL0gRYX00gcv8p7La-udaLgHlm-ydFIqFcfbNB0NvyiIDn-0V'
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbkNmidM05SpQQRBCbCYeRXbC9dR2rHww98RfNgHaqX5WvLhwI'
          }
          alt="face"
        />
      </div>
    );
  }
}

export default Coin;
