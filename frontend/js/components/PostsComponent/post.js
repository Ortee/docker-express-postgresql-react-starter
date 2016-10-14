import React, { Component } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';

export default class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("POST");
    return(
      <section>
        <li>
          <ul>
            <li>ID: {this.props.id}</li>
            <li>NAME: {this.props.name}</li>
            <li>CONTENT: {this.props.content}</li>
            <li>CREATEDAT: {this.props.createdAt}</li>
            <li>UPDATEDAT: {this.props.updatedAt}</li>
          </ul>
        </li>
      </section>
    );
  }
}
