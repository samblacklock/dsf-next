import { Component } from 'react';
import Layout from '../components/layout/index';
import ColorSlash from '../components/color-slash/index';

const colorSlashContent = (
  <div>
  <h1 className='stylized-heading'>
    <span className='large'>Contact Us</span>
  </h1>
  </div>
)


class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <ColorSlash style='flat' content={ colorSlashContent } />
        <section>
        </section>
      </Layout>
    )
  }
}

export default ContactPage;
