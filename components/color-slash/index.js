import { Component } from 'react';

class ColorSlash extends Component {
  render() {
    return (
      <div className={ `color-slash ${ this.props.style || '' }` }>{ this.props.content }</div>
    )
  }
}

export default ColorSlash;
