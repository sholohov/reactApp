import React, { Component } from 'react';
import render from 'react-dom';

class Dialog extends Component {
	onClickClose() {
		const dialogElem = this.refs[this.props.id];
		if (dialogElem.classList) {
			dialogElem.classList.remove('visible');
		}
	}

	render() {
		return (
			<div
				ref={this.props.id}
				key={this.props.id}
				id={this.props.id}
				className={"dialog"}>

				<header>
					<h3 className="title">{this.props.title}</h3>
					<button
						className="btn close"
						onClick={this.onClickClose.bind(this)}
					>✖</button>
				</header>

				<div className="body">
					{this.props.content}
				</div>
			</div>
		);
	}
}

export default Dialog;