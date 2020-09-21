import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const { comment } = this.props
    return (
      <tr>
        <td>{comment.id}</td>
        <td>{comment.text}</td>
        <td>{comment.date}</td>
      </tr>
    )
  }
}

export default Comment

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}
