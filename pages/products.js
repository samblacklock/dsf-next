import { Component } from 'react';
import Layout from '../components/layout/index';
import ColorSlash from '../components/color-slash/index';

import ContentAPI from '../content.js';

const colorSlashContent = (
  <div>
  <h1 className='stylized-heading'>
    <span className='large'>Our fireplace </span>
    <span className='small'>collection...</span>
  </h1>
  </div>
)

class ProductsPage extends Component {
  static async getInitialProps() {
    ContentAPI.getEntries()
      .then(res => { res.items })
      .catch(console.error);
  }

  render() {
    return (
      <Layout>
        <ColorSlash style='flat' content={ colorSlashContent } />
        <section>
          <h2>this is the producst page :)</h2>
        </section>
      </Layout>
    )
  }
}

export default ProductsPage;
