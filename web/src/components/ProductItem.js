import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Products.css';
import { getFirst, getLast, getImage } from '../utils'
import { addToCollection } from '../actions/action-products'

class ProductItem extends React.Component  {

  render() {

    const product = this.props.product

    product.url = `/products/${product.id}`
    product.image = product.images[0]

    const style = {
      image:  {
        backgroundImage: `url("${product.image.url}")`,
        backgroundSize: 'cover',
        height:'100%'
      }
    }

    return (
      <article className={styles.product}>
        <Link className={styles.outer} to={product.url}>
          <div className={styles.inner}>
            <div style={style.image}/>
          </div> 
        </Link>
        <div className={styles.info}>
          <h1 className={styles.subtitle}>{product.name}</h1>
        </div>
        <button onClick={() => this.props.addToCollection(product.id)}>add</button>
      </article>
    )
  }
}

export default connect(null, {addToCollection} )(ProductItem);

