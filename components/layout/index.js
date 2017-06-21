import { Component } from 'react';
import Header from './header/index';
import Footer from './footer/index';
import styles from 'styles/global.scss';

class Layout extends Component {
  constructor({ children, title = 'Durham Stoves and Fires', cssClass = '' }) {
    super();
    this.children = children;
    this.title = title;
    this.cssClass = cssClass;
  }

  render() {
    return (
      <site-content class={ this.cssClass }>
        <title>{ this.title }</title>
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Lato:300" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: styles }}></style>

        <Header />

        { this.children }

        <Footer />
      </site-content>
    )
  }
}

export default Layout;
