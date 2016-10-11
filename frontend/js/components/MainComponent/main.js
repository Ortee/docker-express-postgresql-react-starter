import React, { Component } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';
require('./main.scss');

export default class Main extends Component {
  render() {
    return (
      <section>
        <h1>Hello, Main Component.</h1>
        <Link to={'/author'}>Author</Link>
      </section>
    );
  }
}
