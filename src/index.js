import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errMessage: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div> Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>LOADING...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
