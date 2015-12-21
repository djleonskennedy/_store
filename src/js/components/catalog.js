/**
 * Created by Yuriy on 12/21/2015.
 */
import React from 'react';
import AppStore from '../stores/store';
import CatalogItem from './catalog-item';

function getCatalog(){
	return { items: AppStore.getCatalog() }
}

class Catalog extends React.Component {
	constructor(){
		super();
		this.state = getCatalog();
	}
	render(){

		let items = this.state.items.map( item => {
			return <CatalogItem key={ item.id } item={ item } />
		});

		return (
			<div className="row">
				{ items }
			</div>
		)
	}
}

export default Catalog;