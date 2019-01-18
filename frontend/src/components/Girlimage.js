import React, { Component } from 'react'
import config from '../config'
export default class Girlimage extends Component {
  render() {
    console.log(this.props.img.comment);
    // const comments = this.props.img.comment ? this.props.img.comment.map(comment =>
    //   <p key={comment._id}><span class="font-weight-bold">{comment.createdBy.username}</span>: {comment.content}</p>) : ""

    return (
      <div className="container">
        <div className="girlimage py-3 px-3">
          <div className="text-center">
            <img className="img-fluid my-2 img-thumbnail" src={config.rootPath + this.props.img.imageUrl} alt={this.props.img.title} />

            <div className="ml-4">
              <h4 className="text-center">{this.props.img.title}</h4>
              <p className="text-left ">{this.props.img.description}</p>
              {/* {comments} */}
            </div>

          </div>
        </div>
      </div>

    )
  }
}
