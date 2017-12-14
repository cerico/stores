import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import { Link } from 'react-router-dom';
import styles from './Nav.css'


export const Nav = (props) => {

  return (
    <div className={styles.nav}>
      <Link to="/">home</Link>
      <Link to="/collection">wishlist</Link>
    </div>
  )
}

export default Nav