import React, { Component } from 'react'

export default class ProfilePanel extends Component {
  render() {
    const display = this.props.username ? (
      <div>
        <span className="navbar-text">welcom,{this.props.username}</span>
      </div>
    ) : (
        <button
          className="btn btn-secondary btn-block"
        >
        Sign up
      </button>
      );
    return (
      <div className="col-2 profile_panel text-right">
        {display}
      </div>
    )
  }
}
