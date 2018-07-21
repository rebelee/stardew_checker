import React, { Component } from 'react';

class MinToDonate extends Component {

	render () {
		let minerals;

		minerals = [];

		for (var i = 0; i <= this.props.length-1; i++) {
			{this.props.minToDonate[i] !== '' &&
				minerals.push(this.props.minToDonate[i])
			}
		}

		minerals = minerals.map(minerals => <li>{minerals}</li>);

		return ( 
			<ul>
				<li>Mineral(s) left to donate:</li>
				<ul>
					<li>{minerals}</li>
				</ul>
			</ul>
		);
	}
}

export default MinToDonate;