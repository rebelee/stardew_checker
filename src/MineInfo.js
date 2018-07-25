import React, { Component } from 'react';

class MineInfo extends Component {

	render () {
		let mdiff;

		mdiff = 5 - this.props.mineLine[1];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has reached <strong>level {this.props.mineLine[1]}</strong> of the mines </li>
				<ul class = 'indent'>
					{this.props.mineLine[1] == 120 ? (
						<li class = 'check'><i>THE BOTTOM</i> achievement (reach mine level 120) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>THE BOTTOM</i> achievement (reach mine level 120) -- <strong>need {mdiff} more level(s)</strong></li>
					)}
				</ul>
				<li class = 'main-list'>{this.props.farmer} has reached <strong>level {this.props.mineLine[0]-this.props.mineLine[1]}</strong> of the Skull Cavern</li>
			</ul>
		);
	}
}

export default MineInfo;