import React, { Component, PropTypes } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <li>
          <ul>
            <li>NAME: {this.props.post.name}</li>
            <li>CONTENT: {this.props.post.content}</li>
            <li><button onClick={this.props.removePost.bind(null, this.props.post.name, this.props.i)}>REMOVE</button></li>
          </ul>
        </li>
        <br/>
      </section>
    );
  }
}

export default Post;
