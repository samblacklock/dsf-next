import { Component } from 'react';
import Layout from '../components/layout/index';
import Hero from '../components/hero/index';
import ColorSlash from '../components/color-slash/index';

const colorSlashContent = (
  <div>
    <h1 className='stylized-heading'>
      <span className='large'>View our latest</span>
      <span className='small'>product collection</span>
    </h1>
    <button className="primary">Products</button>
  </div>
)

class IndexPage extends Component {
  render() {
    return (
      <Layout cssClass="index">
        <Hero />

        <section className="intro">
          <div className="intro-text">
            <h2>The finest contemporary fireplaces and stoves in the North East</h2>
            <p>
              With over 100 years' experience in the fireplace industry, our
              expert team at the Newcastle Fireplace Centre can offer a complete
              fireplace and stove service.
            </p>
            <p>
              We offer surrounds for every type of fireplace, including exclusive models
              not commonly available, and a bespoke design service to help you
              realise your dream fireplace.
            </p>
          </div>
          <div className="intro-image">
            <img src="http://www.visionfires.co.uk/wp-content/uploads/2015/10/TL46-trimless.jpg" alt=""/>
          </div>
        </section>

        <ColorSlash content={ colorSlashContent }/>
      </Layout>
    )
  }
}

export default IndexPage;
