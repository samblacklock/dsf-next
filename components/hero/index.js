import { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <h1>Durham Stoves & Fireplaces</h1>
        <video src="../../static/fire2.mp4" autoPlay loop></video>
      </div>
    )
  }
}

export default Hero;
