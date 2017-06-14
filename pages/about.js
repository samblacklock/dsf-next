import { Component } from 'react';
import Layout from '../components/layout/index';
import ColorSlash from '../components/color-slash/index';

const colorSlashContent = (
  <div>
  <h1 className='stylized-heading'>
    <span className='large'>About Us</span>
  </h1>
  </div>
)

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <ColorSlash style='flat' content={ colorSlashContent } />
        <section>
          <h3>About Us</h3>
          <p>Content goes here</p>
        </section>
      </Layout>
    )
  }
}

export default AboutPage;
