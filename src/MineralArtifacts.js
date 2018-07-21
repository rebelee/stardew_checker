import React, { Component } from 'react';

class MineralArtifacts extends Component {

	render () {
		let min_diff;
		let art_diff;

		min_diff = 53 - this.props.minartLine[0];
		art_diff = 42 - this.props.minartLine[3];

		return ( 
			<ul>
				<li>{this.props.farmer} has found <strong>{this.props.minartLine[0]} of 53</strong> minerals</li>
				<li>{this.props.farmer} has found <strong>{this.props.minartLine[3]} of 42</strong> artifacts</li>
				{this.props.minartLine[0] == 53 ? (
						<li>All minerals found <strong> done</strong></li>
					) : (
						<li>All minerals found -- <strong> need {min_diff} more</strong></li>
				)}
				{this.props.minartLine[3] == 42 ? (
						<li>All artifacts found <strong> done</strong></li>
					) : (
						<li>All artifacts found -- <strong> need {art_diff} more</strong></li>
				)}	
			</ul>
		);
	}
}

export default MineralArtifacts;