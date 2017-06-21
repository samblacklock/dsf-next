import { Component } from 'react';
import Layout from 'components/layout/index';
import ColorSlash from 'components/color-slash/index';
import Form from 'components/form/index';

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
          <p>Contact us below, or telephone us on <strong><a href="tel:01913741117"> 0191 374 1117</a></strong></p>
          <Form />
        </section>
      </Layout>
    )
  }
}

export default ContactPage;
