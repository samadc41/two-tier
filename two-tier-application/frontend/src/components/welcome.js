import React from 'react';
import axios from 'axios';

export default class Welcome extends React.Component {
  state = {
    welcome: []
  }

  componentDidMount() {
    axios.get(`https://backend-service.yellowground-0d9dacb3.canadacentral.azurecontainerapps.io/api`)
      .then(res => {
        const welcome = res.data;
        this.setState({ welcome });
      })
  }

  render() {
    return (
      <ul>
        
              <li>Hello</li>
      </ul>
    )
  }
}
