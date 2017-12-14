import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');

import Product from '../components/Product';
import Products from '../components/Products';
import { getProducts } from '../actions/action-products';
import Collection from '../components/Collection';
import Nav from '../components/Nav'

class App extends React.Component  {

  componentWillMount () {
    this.props.getProducts()
  }
  
  render(){

    return (
      <Router>
        <main>
        <Route component={Nav}/>
          <div>
            <Switch>
              <Route exact path="/" component={Products}/>
              <Route path="/collection" component={Collection} />
              <Route path="/products/:id" component={Product} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      products: state.products
    })
}

export default connect(mapStateToProps, {getProducts})(App);

