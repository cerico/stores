import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.css';
import { getImage } from '../utils'
import { connect } from 'react-redux';
import { addToCollection } from '../actions/action-products'

class CollectionItem extends React.Component  {

  render() {

    const product = this.props.product
    product.url = `/products/${product.id}`
    product.image =  getImage(product)

    const style = {
      wrapper: {
        width: '100%', height: '100%'
      },
      image: {
        backgroundImage: `url(${product.image})`
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
        <div>{product.favState}</div>
        <div>{product.name}</div>
        <button onClick={() => this.props.addToCollection(product.id)}>remove</button>
      </article>
    )
  }
}

export default connect(null, {addToCollection} )(CollectionItem);