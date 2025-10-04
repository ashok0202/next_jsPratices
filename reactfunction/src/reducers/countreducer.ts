
interface State {
  count: number;
}

export const reducerFn = (state: State, action: any) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};