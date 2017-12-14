// const API_URL = `
const API_URL = window.location.host

export const getProducts = () => {
  const endpoint = `http://${API_URL}/parties`
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setProducts(res)))
    .catch(error => dispatch(showFailure(error)))
  }
}

export const setProducts = products => {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    payload: products
  }
}

export const showFailure = error => {
  return {
    type: 'GET_PRODUCTS_FAILURE',
    payload: error
  }
}

export const addToCollection = (productId) => {
  let collectionIds = JSON.parse(window.localStorage.getItem('collectionIds')) || []
  if (_.includes(collectionIds, productId)) {
    const newIdSet = collectionIds.filter(item => item !== productId)
    window.localStorage.setItem('collectionIds', JSON.stringify(newIdSet));

  } else {
    const newIdSet = [...collectionIds, productId]
    window.localStorage.setItem('collectionIds', JSON.stringify(newIdSet));
  }
  return {
    type: 'ADD_TO_COLLECTION'
  };
};