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
  return {
    type: 'SHOW_POSTS'
  }
}
