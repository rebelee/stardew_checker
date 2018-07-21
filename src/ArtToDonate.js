import React, { Component } from 'react';

class ArtToDonate extends Component {

	render () {
		let artifacts;

		artifacts = [];

		for (var i = 0; i <= this.props.length-1; i++) {
			console.log(this.props.artToDonate[i])
			{this.props.artToDonate[i] !== '' &&
				artifacts.push(this.props.artToDonate[i])
			}
		}

		artifacts = artifacts.map(artifacts => <li>{artifacts}</li>);

		return ( 
			<ul>
				<li>Artifacts(s) left to donate:</li>
				<ul>
					<li>{artifacts}</li>
				</ul>
			</ul>
		);
	}
}

export default ArtToDonate;