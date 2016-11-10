export function addAlert(text, style) {
  return (dispatch) => {
    dispatch({ type: 'ADD_ALERT', text: text, style: style });
  };
}

export function removeAlert(id) {
  return {
    type: 'REMOVE_ALERT',
    id,
  };
}
