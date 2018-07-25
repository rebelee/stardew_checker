import React, { Component } from 'react';

class SkillLeft extends Component {

	render () {
		let skills = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let skill = {};

			var end_string = this.props.skillLeft[i].substring(this.props.skillLeft[i].indexOf(' -'))
			var link = wiki(this.props.skillLeft[i])

			{this.props.skillLeft[i] !== '' ? (
				skill['link'] = link,
				skill['end_string'] = end_string,
				skills.push(skill)
			) : (
				null
			)}
		}

		skills = skills.map(skills => <li class = 'indent'>{skills['link']}{skills['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Skill(s) left to get to level 10:</li>
				<ul class = 'indent'>
					{skills}
				</ul>
			</ul>
		);
	}
}

export default SkillLeft;