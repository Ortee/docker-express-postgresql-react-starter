import req from 'superagent';

export function addPost(name, content) {
  return {
    type: 'ADD_POST',
    name,
    content
  }
}

export function removePost(postId) {
  return {
    type: 'REMOVE_POST',
    postId
  }
}

export function showPosts() {
  const request = req
  .get('/api/posts')
  .accept('application/json');

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: 'SHOW_POSTS', payload: response.body });
    });
  }
}
