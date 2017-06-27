import { Component } from 'react';
import Layout from 'components/layout/index';
import ColorSlash from 'components/color-slash/index';
import { Gmaps, Marker } from 'react-gmaps';

const coords = {
  lat: 54.792394,
  lng: -1.535202
};

const params = {v: '3.exp', key: 'AIzaSyA_3eWiYfrSyWCDhpndVopMcl7uXvFxW7A'};

const colorSlashContent = (
  <div>
  <h1 className='stylized-heading'>
    <span className='large'>Find us</span>
  </h1>
  </div>
)


class Location extends Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(coords);
    });
  }

  render() {
    return (
      <Layout title='Find Us | Durham Stoves and Fireplaces' cssClass='location'>
        <ColorSlash style='flat' content={ colorSlashContent } />
        <section>
          <address className="find-info">
            Durham Stoves and Fireplaces <br />
            Unit 9 FLEXSPACE <br />
            Evans Business Centre <br />
            BELMONT INDUSTRIAL ESTATE <br />
            DURHAM <br />
            DH1 1ST
          </address>
          <Gmaps
            width={'100%'}
            height={'600px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={12}
            params={params}
            onMapCreated={this.onMapCreated}
            resize={this.onResize}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable={false} />
          </Gmaps>
        </section>
      </Layout>
    )
  }
}

export default Location;
