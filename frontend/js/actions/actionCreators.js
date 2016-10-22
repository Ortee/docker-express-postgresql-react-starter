import req from 'superagent';

export function addPost(name, content) {
  const request = req.post('/api/posts')
   .set('Content-type', 'application/json');
   return (dispatch) => {
     request.send([{ name: name, content: content }])
      .end(function(err, res){
         if (err || !res.ok) {
           dispatch(addAlert('Your post wasn`t added !', 'danger'));
           dispatch({ type: 'ADD_POSTS', res: false });
         } else {
           dispatch(addAlert('Your post was successfully added !', 'success'));
           dispatch({ type: 'ADD_POSTS', res: true, req:{'name':name, 'content': content}});
         }
     });
   }
}

export function removePost(name, indexInState) {
  const request = req.del('/api/postremove')
   .set('Content-type', 'application/json');
   return (dispatch) => {
     request.send([{ name: name }])
      .end(function(err, res){
         if (err || !res.ok) {
           dispatch({ type: 'REMOVE_POST', res: false });
           dispatch(addAlert('Your post wasn`t removed !', 'danger'));
         } else {
           dispatch(addAlert('Your post was successfully removed !', 'success'));
           dispatch({ type: 'REMOVE_POST', res: true, req:{ 'name':name, 'indexInState': indexInState}});
         }
     });
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
};

export function addAlert(text, style) {
  return (dispatch) => {
    dispatch({ type: 'ADD_ALERT', text: text, style: style });
  }
};

export function removeAlert(id){
  return {
    type: 'REMOVE_ALERT',
    id
  };
};
