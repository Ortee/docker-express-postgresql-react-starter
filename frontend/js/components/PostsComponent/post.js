import React, { Component } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';

export default class Post extends Component {
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
          </ul>
        </li>
        <br/>
      </section>
    );
  }
}
