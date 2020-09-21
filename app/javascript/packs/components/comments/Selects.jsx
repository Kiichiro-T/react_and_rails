import React from 'react'
import PropTypes from 'prop-types'

class Selects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_month: this.props.selected_month,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.getComments(e.target.value)
  }
  render() {
    return (
      <select
        value={this.props.selected_month}
        onChange={this.handleChange}
      >
        {this.props.children}
      </select>
    )
  }
}

export default Selects
Selects.propTypes = {
  getComments: PropTypes.func.isRequired,
  selected_month: PropTypes.string.isRequired,
}
