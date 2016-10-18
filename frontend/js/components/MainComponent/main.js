import React, { Component } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';
require('./main.scss');

export default class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section>
        <h1>Main Menu</h1>
        <ul>
          <li><Link to={'/author'}>Author</Link></li>
          <li><Link to={'/posts'}>Posts from database</Link></li>
        </ul>
        <hr></hr>
        {React.cloneElement(this.props.children, this.props)}
      </section>
    );
  }
}
