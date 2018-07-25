import React, { Component } from 'react';

class StardropInfo extends Component {

	render () {
		let mdiff;

		mdiff = 7 - this.props.stardropLine[0];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has received <strong>{this.props.stardropLine[0]}</strong> of 7 stardrops</li>
				<ul class = 'indent'>
					{this.props.stardropLine[0] == 7 ? (
						<li class = 'check'><i>MYSTERY OF THE Stardrops</i> achievement (find every stardrop) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>MYSTERY OF THE Stardrops</i> achievement (find every stardrop) -- <strong>need {mdiff} more stardrop(s)</strong></li>
					)}
				</ul>
				<br />

				<li class = 'main-list'>Stardrops Left:</li>
				<ul class = 'indent'>
					<li class = 'indent'>{this.props.stardropLine[1]}</li>
				</ul>
			</ul>
		);
	}
}

export default StardropInfo;