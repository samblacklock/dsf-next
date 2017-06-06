import { Component } from 'react';
import Header from './header/index';
import Footer from './footer/index';
import styles from 'styles/global.scss';

class Layout extends Component {
  constructor({ children, title = 'Durham Stoves and Fires' }) {
    super();
    this.children = children;
    this.title = title;
  }

  render() {
    return (
      <site-content>
        <style dangerouslySetInnerHTML={{ __html: styles }}></style>
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" />

        <Header />

        { this.children }

        <Footer />
      </site-content>
    )
  }
}

export default Layout;
