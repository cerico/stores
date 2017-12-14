const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return action.payload;
    case 'GET_PRODUCTS_FAILURE':
      return action.payload;
    default:
      return state;
  }
}