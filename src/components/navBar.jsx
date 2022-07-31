import React, { Component } from "react";
export default class NavBar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="1">
            Navbar
            <span className="badge badge-pill badge-secondary m-3">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}
