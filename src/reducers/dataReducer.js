export function dataReducer(state, action) {
  switch (action.type) {
    case "set-posts":
      return { ...state, posts: action.payload };
    case "set-bookmarks":
      return { ...state, bookmarks: action.payload };
    case "set-users":
      return { ...state, users: action.payload };
    case "update-user":
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    default:
      return state;
  }
}
