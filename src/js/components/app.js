import React from 'react';
import AppActions from '../actions/actions';

export default class App extends React.Component {
	render() {
		return <h1 onClick={AppActions.addItem.bind(null, "asdasd a dad")}>Flux A</h1>
	}
}