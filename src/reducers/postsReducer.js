export function postsReducer(state, action) {
  switch (action.type) {
    case "set":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
