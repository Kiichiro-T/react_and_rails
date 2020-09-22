import React from 'react'
import PropTypes from 'prop-types'

class Postcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.value.length === 7) {
      this.props.getAddress(e.target.value)
    }
  }
  render() {
    return (
      <>
        <p>郵便番号</p>
        <input
          type="text"
          autoComplete="postal-code"
          placeholder="郵便番号（必須）"
          name="address[postcode]"
          id="address_postcode"
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default Postcode

Postcode.propTypes = {
  getAddress: PropTypes.func.isRequired,
}
