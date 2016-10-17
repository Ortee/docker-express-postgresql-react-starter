import uuid from 'node-uuid';

function posts(state = [], action) {
  switch(action.type) {
      case 'ADD_POST' :
        return [...state,{
          id: uuid.v1(),
          name: action.name,
          content: action.content,
          createdAt: Date.now(),
          updatedAt: Date.now()
        }];
      case 'SHOW_POSTS' :
        action.payload.map((post) => state=[...state, post]);
        return state;
      default:
        return state;
    }
}

export default posts;
