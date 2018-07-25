import React, { Component } from 'react';

class MineralArtifacts extends Component {

	render () {
		let min_diff;
		let art_diff;

		min_diff = 53 - this.props.minartLine[0];
		art_diff = 42 - this.props.minartLine[3];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has found <strong>{this.props.minartLine[0]} of 53</strong> minerals</li>
				<li class = 'main-list'>{this.props.farmer} has found <strong>{this.props.minartLine[3]} of 42</strong> artifacts</li>
				<ul class = 'indent'>
					{this.props.minartLine[0] == 53 ? (
							<li class = 'check'>All minerals found <strong> done</strong></li>
						) : (
							<li class = 'x'>All minerals found -- <strong> need {min_diff} more</strong></li>
					)}
					{this.props.minartLine[3] == 42 ? (
							<li class = 'check'>All artifacts found <strong> done</strong></li>
						) : (
							<li class = 'x'>All artifacts found -- <strong> need {art_diff} more</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default MineralArtifacts;