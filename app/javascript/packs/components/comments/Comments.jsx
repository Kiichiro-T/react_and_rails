import React from 'react'
import PropTypes from 'prop-types'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }
  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Text</th>
                <th scope="col">date</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Comments
