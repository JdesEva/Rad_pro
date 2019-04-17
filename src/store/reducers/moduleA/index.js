export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// TODO reducer
export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}

export function token(state = '', action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return state.concat([action.text]);
    default:
      return state;
  }
}
