import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import { Link } from 'react-router-dom';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import {selectProduct} from '../selectors/products';
import style from './product.css';
import Images from './Images';

const Product = (props) => {
     console.log(props.product)
    return (
      props.product ? 
        <div>
          <div className={classNames(style.product, style.imageContainer)}>
          {props.product.images ? 
            <Images images={props.product.images}/>
            : null}
          </div>
          <div className={classNames(style.product, style.detail)}>
            <Link style={{'float':'right'}} to="/">
              <MdHighlightOff size={40} />
            </Link>
            <div className="change"> 
              <h1 className={style.subtitle}>{props.product.name} 
               
              </h1> 
              <div className={style.description}></div> 
              <ul>

              </ul>
            </div>
          </div> 
        </div>
      : null
    )
  }

  const mapStateToProps = (state,ownProps) => {

  return {
    product: selectProduct(state.products,ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(Product);

