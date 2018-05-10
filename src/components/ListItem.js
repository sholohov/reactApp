import React, { Component } from 'react';
import { render } from 'react-dom';

class ListItem extends Component {
	render() {
		return (
			<li>
				{this.props.quantity} × {this.props.name} × {this.props.children}
			</li>
		);
	}
}

export default ListItem;