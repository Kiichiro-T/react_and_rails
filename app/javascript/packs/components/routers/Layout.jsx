import React from "react";

import { NavLink, Link, withRouter } from "react-router-dom";

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    // this.props.history.push("/");
    this.props.history.replace("/");
  }
  render() {
    return (
      <div>
        <h2>Layout</h2>
        {this.props.children}
        <Link to="/archives/some-other-articles?date=yesterday&filter=none" class="btn btn-warning">archives (some other articles)</Link>
        <Link to="/archives?date=today&filter=hot" class="btn btn-danger">archives</Link>
        <NavLink to="/settings/main" className="btn btn-success" activeClassName="btn-danger">settings</NavLink>
        <Link to="/settings/extra" className="btn btn-success">settings（extra）</Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);
