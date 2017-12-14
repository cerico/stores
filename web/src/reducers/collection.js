const initialState = []

export default (state = initialState, action) => {
const collectionIds = JSON.parse(window.localStorage.getItem('collectionIds'))
switch (action.type) {
case 'ADD_TO_COLLECTION':
  return collectionIds
default:
  return collectionIds;
}
}