import { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/location">Location</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
