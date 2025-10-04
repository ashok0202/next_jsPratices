interface IState {
  price: string;
  discount: string;
  rating: string;
}

export const filterReducer = (state: IState, action: any) => {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_DISCOUNT":
      return { ...state, discount: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
