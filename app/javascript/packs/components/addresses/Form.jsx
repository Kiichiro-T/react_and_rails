import React from 'react'
import PropTypes from 'prop-types'

import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefectures: [],
    }
  }
  componentDidMount() {
    this.getPrefectures();
  }
  getPrefectures() {
    axios
      .get("/api/v1/addresses")
      .then(response => {
        const prefectures = response.data
        this.setState({ prefectures });
      })
      .catch(error => {
        console.log(error)
      });
  }
  render() {
    return (
      <>
        <p>フォーム</p>
        <select
          autoComplete="address-level1"
          name="address[prefecture_code]"
          id="address_prefecture_code"
          value={this.props.prefecture_code}
        >
          <option value=''>都道府県を選択（必須）</option>
          {this.state.prefectures.map(prefecture => (
            <option key={prefecture.code} value={prefecture.code}>{prefecture.name}</option>
          ))}
        </select>
        <input
          type="text"
          autoComplete="address-level2"
          placeholder="市区町村・番地（必須）"
          name="address[address_city]"
          id="address_address_city"
          defaultValue={this.props.address_city}
        />
        <input
          type="text"
          autoComplete="address-line2"
          placeholder="建物名・号室（必須）"
          name="address[address_building]"
          id="address_address_building"
          defaultValue={this.props.address_building}
        />
      </>
    )
  }
}

export default Form

Form.propTypes = {
  prefecture_code: PropTypes.number.isRequired,
  address_city: PropTypes.string.isRequired,
  address_building: PropTypes.string.isRequired,
}
