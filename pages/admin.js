import { Component } from 'react';

class AdminPage extends Component {
  componentDidMount() {
    window.location.href = 'https://be.contentful.com/login' 
  }

  render() {
    return (
      <p>Redirecting...</p>
    )
  }
}

export default AdminPage;
