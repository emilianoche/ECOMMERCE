import {
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY,
  ADD_PRODUCT,
  EDIT_PRODUCT,
} from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case GET_PRODUCTS_CATEGORY:
      return action.products;
    case ADD_PRODUCT:
      return state.concat(action.product);
    case EDIT_PRODUCT:
      const index = state.findIndex(
        product => product.id === action.product.id,
      );
      const newState = state.slice();
      newState[index] = action.product;
      return newState;
    default:
      return state;
  }
};
