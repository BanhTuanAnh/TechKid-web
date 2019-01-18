import React, { Component } from 'react'
import GirlImage from '../components/Girlimage';
import {BrowserRouter,Link,Route} from "react-router-dom";
export default class MainContent extends Component {
  render() {
    const allImages = this.props.images.map(img =>
      <div key={img._id} className="col-3">
        <Link to={`/api/images/${img._id}`}>
          <GirlImage img={img} />;
        </Link>
      </div>
    )
    return (
      <div className="container">
        <div className="row">
          {allImages}
        </div>
      </div>
    )
  }
}
