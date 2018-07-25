import React, { Component } from 'react';

class SkillInfo extends Component {

	render () {
		let mdiff;

		mdiff = 5 - this.props.skillLine;

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has reached level 10 in <strong>{this.props.skillLine}</strong> of 5 skills </li>
				<ul class = 'indent'>
					{this.props.skillLine >= 1 ? (
						<li class = 'check'><i>SINGULAR TALENT</i> achievement (level 10 in a skill) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>SINGULAR TALENT</i> achievement (level 10 in a skill) -- <strong>need 1 more skill at level 10</strong></li>
					)}
					{this.props.skillLine == 5 ? (
						<li class = 'check'><i>MASTER OF THE FIVE WAYS</i> achievement (level 10 in every skill) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>MASTER OF THE FIVE WAYS</i> achievement (level 10 in every skill) -- <strong>need {mdiff} more skill(s) at level 10</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default SkillInfo;