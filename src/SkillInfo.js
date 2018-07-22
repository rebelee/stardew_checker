import React, { Component } from 'react';

class SkillInfo extends Component {

	render () {
		let mdiff;

		mdiff = 5 - this.props.skillLine;

		return ( 
			<ul>
				<li>{this.props.farmer} has reached level 10 in <strong>{this.props.skillLine}</strong> of 5 skills </li>
				{this.props.skillLine >= 1 ? (
					<li><i>SINGULAR TALENT</i> achievement (level 10 in a skill) <strong>done</strong></li>
				) : (
					<li><i>SINGULAR TALENT</i> achievement (level 10 in a skill) -- <strong>need 1 more skill at level 10</strong></li>
				)}
				{this.props.skillLine == 5 ? (
					<li><i>MASTER OF THE FIVE WAYS</i> achievement (level 10 in every skill) <strong>done</strong></li>
				) : (
					<li><i>MASTER OF THE FIVE WAYS</i> achievement (level 10 in every skill) -- <strong>need {mdiff} more skill(s) at level 10</strong></li>
				)}
			</ul>
		);
	}
}

export default SkillInfo;