import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
	onClickButton = (e) => {
		const targetId = e.target.getAttribute("data-target");
		let dialog = document.getElementById(targetId);
		dialog.classList.add('visible');
	}

	render() {
		return (
			<button
				className="btn"
				data-target={this.props.target}
				onClick={this.onClickButton}
			>Triggred {this.props.target}</button>
		);
	}
}

export default Button;