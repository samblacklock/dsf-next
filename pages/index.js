import { Component } from 'react';
import Layout from '../components/layout/index';
import Hero from '../components/hero/index';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Hero />

        <section>
          <h2>this is the main page :)</h2>
        </section>
      </Layout>
    )
  }
}

export default IndexPage;
