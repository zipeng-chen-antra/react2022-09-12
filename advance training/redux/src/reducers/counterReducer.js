const initState = { value: 0 };
export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    case "counter/reset":
      return initState;

    default:
      return state;
  }
}
