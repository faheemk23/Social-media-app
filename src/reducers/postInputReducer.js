export function postInputReducer(state, action) {
  switch (action.type) {
    case "set-text":
      return { ...state, text: action.payload };
    case "add-image":
      return { ...state, images: [...state.images, action.payload] };
    case "add-video":
      return { ...state, video: action.payload };
    case "remove-image":
      return {
        ...state,
        images: state.images.filter((image) => image !== action.payload),
      };
    case "remove-video":
      return { ...state, video: null };
    case "clear-all":
      return { text: "", images: [], video: null };

    default:
      return state;
  }
}
