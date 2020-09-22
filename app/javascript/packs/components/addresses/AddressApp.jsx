import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Postcode from './Postcode';
import Form from './Form';
import setAxiosHeaders from "../AxiosHeaders";

class AddressApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefecture_code: '',
      address_city: '',
      address_building: ''
    };
    this.getAddress = this.getAddress.bind(this);
  }
  getAddress(zipcode) {
    setAxiosHeaders();
    axios
      .get("http://zipcloud.ibsnet.co.jp/api/search?", {
        params: { zipcode: zipcode },
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
      })
      .then(response => {
        console.log(response.data)
        const data = response.data
        if (data.results === null) {
          alert(`「${zipcode}」に該当する住所を見つけることができませんでした。`);
        } else {
          const address = data.results[0]
          this.setState({
            prefecture_code: address.prefcode,
            address_city: address.address2,
            address_building: address.address3
          });
        }
      })
      .catch(error => {
        console.log(error)
      });
  }
  render() {
    return(
      <>
        <label>Address</label>
        <Postcode
          getAddress={this.getAddress}
        />
        <Form
          prefecture_code={Number(this.state.prefecture_code)}
          address_city={this.state.address_city}
          address_building={this.state.address_building}
        />
      </>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('address-app')
  app && ReactDOM.render(<AddressApp />, app)
})
