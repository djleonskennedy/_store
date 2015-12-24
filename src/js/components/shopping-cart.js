/**
 * Created by Yuriy on 12/21/2015.
 */
import React from 'react';
import AppStore from '../stores/store';
import ShopingCartItem from './shopping-cart-item';

const cartItems = () => {
	return { items: AppStore.getCart() }
};

class ShopingCart extends React.Component {
	constructor(){
		super();
		this.state = cartItems();
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		AppStore.addChangeListener( this._onChange )
	}
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange )
	}
	_onChange(){
		this.setState( cartItems() )
	}
	render(){
		var total = 0;
		var items = this.state.items.map( ( item, i ) => {
			let subtotal = item.cost * item.qty;
			total += subtotal;
			return (
				<ShopingCartItem
					subtotal = { subtotal }
					key = { i }
					item = { item }
				/>
			)
		} );
		return (
			<div>
				<h1>Cart</h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>Item</th>
							<th>Qty</th>
							<th></th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{ items }
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="text-right">Total</td>
							<td>${ total }</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

export default ShopingCart;