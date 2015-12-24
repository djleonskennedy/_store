/**
 * Created by Yuriy on 12/21/2015.
 */
import React from 'react';
import AppActions from '../actions/actions';
import CartButton from './shopping-cart-button';

// Statless component

export default (props) => {
	return (
		<div className="col-xs-6 col-cm-4 col-md-3">
			<h4>{ props.item.title }</h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
			<p>{ props.item.summary }</p>
			<p>{ props.item.cost }</p>
			<CartButton handler = {
				AppActions.addItem.bind(null, props.item)
			}
			txt="Add To Shopping Cart"
			/>
		</div>
	)
}