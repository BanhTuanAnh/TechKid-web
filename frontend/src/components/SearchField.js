import React, { Component } from 'react'

export default class SearchField extends Component {
  handleTextChange = event=> this.props.onSearchChanged(event.target.value);
  
  render() {
    return (
        <form className="col-6">
            <input onChange={this.handleTextChange} className="form-control" type="text" placeholder="Search"/>
        </form>
    )
  }
}

