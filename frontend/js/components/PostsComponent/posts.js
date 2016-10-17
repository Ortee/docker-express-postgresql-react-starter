import React, { Component } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';
import Post from './post';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const content = this.refs.content.value;
    this.props.addPost(name, content);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <section>
        <h1>Posts Component:</h1>
        <p>ADD POST:</p>
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <p>name: <input type="text" ref="name" placeholder="name"/></p>
          <p>content: <input type="text" ref="content" placeholder="content"/></p>
          <button type="submit">Submit</button>
        </form>
        <p>POST LIST:</p>
        <ol>
          {this.props.posts.map((post, i) =>
            <Post {...this.props}
              key={i}
              i={i}
              post={post}
            />)}
        </ol>
        <button onClick={this.props.showPosts.bind()}>LOAD FROM DB</button>
      </section>
    );
  }
}
