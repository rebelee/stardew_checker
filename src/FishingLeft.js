import React, { Component } from 'react';

class FishingLeft extends Component {

	render () {
		let fishing = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let fish = {};

			var end_string = this.props.fishingLeft[i].substring(this.props.fishingLeft[i].indexOf(' -'))
			var link = wiki(this.props.fishingLeft[i])

			{this.props.fishingLeft[i] !== '' ? (
				fish['link'] = link,
				fish['end_string'] = end_string,
				fishing.push(fish)
			) : (
				null
			)}
		}

		fishing = fishing.map(fishing => <li class = 'indent'>{fishing['link']}{fishing['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Fish left to catch:</li>
				<ul class = 'indent'>
					{fishing}
				</ul>
			</ul>
		);
	}
}

export default FishingLeft;