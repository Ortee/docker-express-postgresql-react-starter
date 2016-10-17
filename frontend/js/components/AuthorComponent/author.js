import React, { Component } from 'react';
import request from 'superagent';

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {author: []};
  }
  
  componentWillMount() {
    request.get('/api/author')
    .accept('application/json')
    .then((response) => {
      this.setState({
        author: response.body
      });
    })
  }

  render() {
    console.log(this.props);
    return (
      <article>
        <h1>Author Component:</h1>
        <a href={this.state.author.url} rel="author">{this.state.author.username}</a>
        <p>{this.state.author.description}</p>
      </article>
    );
  }
}
