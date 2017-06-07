import { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className='hero-container'>
        <h1 className='stylized-heading'>
          <span className='large'>Durham Stoves</span>
          <span className='small'>& Fireplaces</span>
        </h1>
        <strong>Suppliers of Vision fires in the North East</strong>
      </div>
    )
  }
}

export default Hero;
