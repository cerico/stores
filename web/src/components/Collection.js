import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './Products.css';
import {getSelection} from '../selectors/products';
import ProductItem from './CollectionItem';

class Products extends React.Component  {

  render (){
    let display
    const style = {
      general: {
        display: 'flex'
      }
    }
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.collection.length > 0 ? 
          this.props.collection.map((product, index) =>
            <ProductItem product={product} key={index}/>) 
          : null
        }
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      collection: getSelection(state.products,state.collectionIds)
    })
}

export default connect(mapStateToProps, null )(Products);
