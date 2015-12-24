import React from 'react';
import AppActions from '../actions/actions';
import Catalog from './catalog'
import ShoppingCart from './shopping-cart'

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Catalog />
				<ShoppingCart />
			</div>
		)
	}
}