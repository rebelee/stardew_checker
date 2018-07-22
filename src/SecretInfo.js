import React, { Component } from 'react';

class SecretInfo extends Component {

	render () {
		let secretLength;

		secretLength = this.props.secretLine.length;

		return ( 
			<ul>
				<li>{this.props.farmer} <strong>{this.props.secretLine[0]}</strong> seen Krobus at the Bus Stop</li>
				{this.props.secretLine[1] === true ? (
					<li>{this.props.farmer} <strong> has found</strong> the Magnifying Glass</li>
				) : (
					<li>{this.props.farmer} <strong> has not found</strong> the Magnifying Glass</li>
				)}
				<li>{this.props.farmer} has read <strong>{this.props.secretLine[2]}</strong> of 23 secret notes</li>
				<li>Left to read:</li>
				<ul>
					<li>{(this.props.secretLine.slice(3, secretLength)).map(secret => <li>{secret}</li>)}</li>
				</ul>
			</ul>
		);
	}
}

export default SecretInfo;