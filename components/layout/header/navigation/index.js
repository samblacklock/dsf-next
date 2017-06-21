import { Component } from 'react';
import Link from 'next/link';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link prefetch href="/"><a>Home</a></Link></li>
          <li><Link prefetch href="/products"><a>Products</a></Link></li>
          <li><Link prefetch href="/contact"><a>Contact</a></Link></li>
          <li><Link prefetch href="/location"><a>Location</a></Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
