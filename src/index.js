import React, { Component } from 'react';
import { render } from 'react-dom';
import Dialog from './components/Dialog';
import Button from './components/Button';

const loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minima atque, ut ex ipsum quam excepturi placeat soluta at sit corporis dolorem illum possimus optio perspiciatis. Dolor unde itaque natus!";

class Test extends Component {
	render() {
		return (
			<div>
				<div className="buttons">
					<Button target="dialog-1" />
					<Button target="dialog-2" />
					<Button target="dialog-3" />
				</div>

				<div id="dialog-container">
					<Dialog
						id="dialog-1"
						title="Dialog title 1"
						content={loremText}
					/>

					<Dialog
						id="dialog-2"
						title="Dialog title 2"
						content={loremText}
					/>

					<Dialog
						id="dialog-3"
						title="Dialog title 3"
						content={loremText}
					/>
				</div>
			</div>
		);
	}
}

render(<Test />, document.getElementById('root'));