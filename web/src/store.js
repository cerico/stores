import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/products';
import collectionIds from './reducers/collection';

const reducers = combineReducers({
  products,
  collectionIds
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)