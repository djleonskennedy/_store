/**
 * Created by Yuriy on 12/21/2015.
 */
import React from 'react';
import ShoppingCartButtom from './shopping-cart-button';
import AppActions from '../actions/actions';

export default (props) => {
	return (
		<tr>
			<td>
				<ShoppingCartButtom
					txt="x"
					handler={AppActions.removeItem.bind(null, props.item)}
				/>
			</td>
			<td>{props.item.title}</td>
			<td>{props.item.qty}</td>
			<td>
				<div className="btn-group">
					<ShoppingCartButtom
						txt = "-"
						handler = { AppActions.dicreaseItem.bind(null, props.item) }
					/>
					<ShoppingCartButtom
						txt = "+"
						handler = { AppActions.increaseItem.bind(null, props.item) }
					/>
				</div>
			</td>
			<td>${ props.subtotal }</td>
		</tr>
	)
}