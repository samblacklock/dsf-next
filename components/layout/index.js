import { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Header from './header/index';
import Footer from './footer/index';

class Layout extends Component {
  constructor({ children, title = 'Durham Stoves and Fires' }) {
    super();
    this.children = children;
    this.title = title;
  }

  render() {
    return (
      <site-content>
        <style jsx global>
          {`
            html {
              color: red;
            }
          `}
        </style>

        <Head>
          <title>{ this.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <Header />

        <main-content>
          <h1>lol</h1>
          { this.children }
        </main-content>

        <Footer />
      </site-content>
    )
  }
}

export default Layout;
