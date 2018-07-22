import React, { Component } from 'react';

class MineInfo extends Component {

	render () {
		let mdiff;

		mdiff = 5 - this.props.mineLine[1];

		return ( 
			<ul>
				<li>{this.props.farmer} has reached <strong>level {this.props.mineLine[1]}</strong> of the mines </li>
				{this.props.mineLine[1] == 120 ? (
					<li><i>THE BOTTOM</i> achievement (reach mine level 120) <strong>done</strong></li>
				) : (
					<li><i>THE BOTTOM</i> achievement (reach mine level 120) -- <strong>need {mdiff} more level(s)</strong></li>
				)}
				<li>{this.props.farmer} has reached <strong>level {this.props.mineLine[0]-this.props.mineLine[1]}</strong> of the Skull Cavern</li>
			</ul>
		);
	}
}

export default MineInfo;