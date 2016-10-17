function posts(state = [], action) {
  switch(action.type) {
      case 'ADD_POSTS' :
        if(action.res === true){
          return [...state,{
            name: action.req.name,
            content: action.req.content
          }];
        }
        return state;
      case 'SHOW_POSTS' :
        action.payload.map((post) =>
          state = [...state, post]
        );
        return state;
      case 'REMOVE_POST' :
        //TODO
      default:
        return state;
    }
}

export default posts;
