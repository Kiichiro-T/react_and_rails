import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_month: this.props.selected_month,
    }
  }
  render() {
    const month = this.props.month
    return (
      <option value={month}>{month}</option>
    )
  }
}

export default Select

Select.propTypes = {
  month: PropTypes.string.isRequired,
  selected_month: PropTypes.string.isRequired,
}
