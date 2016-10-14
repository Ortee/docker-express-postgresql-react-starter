import React, { Component } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';
import request from 'superagent';
import Post from './post';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentWillMount() {
    request.get('/api/posts')
    .accept('application/json')
    .then((response) => {
      this.setState({
        posts: response.body
      });
    })
  }

  render() {
    if(this.state.posts.length === 0){
      return(
        <section>
          <h1>Posts List from database:</h1>
          Migrate and Seed database.
        </section>)
    }
    return (
      <section>
        <h1>Posts List from database:</h1>
        <ol>
          {this.state.posts.map( (elem, index) => {
            return <Post
              key={index}
              id={elem.id}
              name={elem.name}
              content={elem.content}
              createdAt={elem.createdAt}
              updatedAt={elem.updatedAt}
            />
          })}
        </ol>
      </section>
    );
  }
}
