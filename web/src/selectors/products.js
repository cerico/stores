import _ from 'lodash';
import { createSelector } from 'reselect';

export const selectProduct = (products,id) => {
  const product = products.filter(product => product.id === parseInt(id))[0]
  return product;
};

export const getSelection = (products,ids) => {
  let collection = products.filter(product => 
   ids.includes(product.id) ? product.id : false
  )
  return collection;
};

