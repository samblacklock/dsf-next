import { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className='hero-container'>
        <h1 className='stylized-heading'>
          <span className='large'>Durham St<span className='flame-letter'>o</span>ves</span>
          <span className='small'>& Fireplaces</span>
        </h1>
        <h3>Design, Sales and Installation</h3>
        <strong>Gas & Electrical Fires / Multi-Fuel / Central Heating</strong>
      </div>
    )
  }
}

export default Hero;
