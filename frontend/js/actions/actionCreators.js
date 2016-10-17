import req from 'superagent';

export function addPost(name, content) {
  const request = req.post('/api/posts')
   .set('Content-type', 'application/json');
   return (dispatch) => {
     request.send([{ name: name, content: content }])
      .end(function(err, res){
         if (err || !res.ok) {
           dispatch({ type: 'ADD_POSTS', res: false });
         } else {
           dispatch({ type: 'ADD_POSTS', res: true, req:{'name':name, 'content': content}});
         }
     });
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
