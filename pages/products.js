import { Component } from 'react';
import Layout from '../components/layout/index';
import ColorSlash from '../components/color-slash/index';
import Product from '../components/product/index';

import FetchContent from '../content.js';

const colorSlashContent = (
  <div>
  <h1 className='stylized-heading'>
    <span className='large'>Our fireplace </span>
    <span className='small'>collection...</span>
  </h1>
  </div>
)

class ProductsPage extends Component {
  static async getInitialProps () {
    const res = await FetchContent;
    this.data = res.bodyUsed ? this.data : await res.json();
    return { items: this.data.items, assets: this.data.includes.Asset }
  }

  render() {
    return (
      <Layout>
        <ColorSlash style='flat' content={ colorSlashContent } />
        <section>
          {
            this.props.items ?
            this.props.items.map((item, index) => <Product key={ index } item={ item } assets={ this.props.assets }/>) :
            <h3>No items to show</h3>
          }
        </section>
      </Layout>
    )
  }
}

export default ProductsPage;
