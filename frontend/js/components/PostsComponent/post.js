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
            <li>U_CODE: {this.props.post.id}</li>
            <li>NAME: {this.props.post.name}</li>
            <li>CONTENT: {this.props.post.content}</li>
            <li>CREATEDAT: {this.props.post.createdAt}</li>
            <li>UPDATEDAT: {this.props.post.updatedAt}</li>
          </ul>
        </li>
        <br/>
      </section>
    );
  }
}
