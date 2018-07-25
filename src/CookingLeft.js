import React, { Component } from 'react';

class CookingLeft extends Component {

	render () {
		let cooking = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let cook = {};

			var end_string = this.props.cookingLeft[i].substring(this.props.cookingLeft[i].indexOf(' -'))
			var link = wiki(this.props.cookingLeft[i])

			{this.props.cookingLeft[i] !== '' ? (
				cook['link'] = link,
				cook['end_string'] = end_string,
				cooking.push(cook)
			) : (
				null
			)}
		}

		cooking = cooking.map(cooking => <li class = 'indent'>{cooking['link']}{cooking['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Recipe(s) left to cook:</li>
				<ul class = 'indent'>
					{cooking}
				</ul>
			</ul>
		);
	}
}

export default CookingLeft;