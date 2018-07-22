import React, { Component } from 'react';

class StardropInfo extends Component {

	render () {
		let mdiff;

		mdiff = 7 - this.props.stardropLine[0];

		return ( 
			<ul>
				<li>{this.props.farmer} has received <strong>{this.props.stardropLine[0]}</strong> of 7 stardrops</li>
				{this.props.stardropLine[0] == 7 ? (
					<li><i>MYSTERY OF THE Stardrops</i> achievement (find every stardrop) <strong>done</strong></li>
				) : (
					<li><i>MYSTERY OF THE Stardrops</i> achievement (find every stardrop) -- <strong>need {mdiff} more stardrop(s)</strong></li>
				)}
				<li>Stardrops Left:</li>
				<ul>
					<li>{this.props.stardropLine[1]}</li>
				</ul>
			</ul>
		);
	}
}

export default StardropInfo;