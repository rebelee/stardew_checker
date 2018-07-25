import React, { Component } from 'react';

class SecretInfo extends Component {

	render () {
		let secretLength;

		secretLength = this.props.secretLine.length;

		console.log(this.props.secretLine[0]);

		return ( 
			<ul class = 'main'>
				{this.props.secretLine[0] === 'has' ? (
					<li class = 'check'>{this.props.farmer} <strong>{this.props.secretLine[0]}</strong> seen Krobus at the Bus Stop</li>
				) : (
					<li class = 'x'>{this.props.farmer} <strong>{this.props.secretLine[0]}</strong> seen Krobus at the Bus Stop</li>
				)}

				{this.props.secretLine[1] === true ? (
					<li class = 'check'>{this.props.farmer} <strong> has found</strong> the Magnifying Glass</li>
				) : (
					<li class = 'x'>{this.props.farmer} <strong> has not found</strong> the Magnifying Glass</li>
				)}
				<br />

				<li class = 'main-list'>{this.props.farmer} has read <strong>{this.props.secretLine[2]}</strong> of 23 secret notes</li>
				<li class = 'main-list'>Left to read:</li>
				<ul class = 'indent'>
					{(this.props.secretLine.slice(3, secretLength)).map(secret => <li class = 'indent'>{secret}</li>)}
				</ul>
			</ul>
		);
	}
}

export default SecretInfo;