import React, { Component } from 'react';

class MinToDonate extends Component {

	render () {
		let minerals = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let mineral = {};

			var end_string = this.props.minToDonate[i].substring(this.props.minToDonate[i].indexOf(' -'))
			var link = wiki(this.props.minToDonate[i])

			{this.props.minToDonate[i] !== '' ? (
				mineral['link'] = link,
				mineral['end_string'] = end_string,
				minerals.push(mineral)
			) : (
				null
			)}
		}

		minerals = minerals.map(minerals => <li class = 'indent'>{minerals['link']}{minerals['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Mineral(s) left to donate:</li>
				<ul class = 'indent'>
					{minerals}
				</ul>
			</ul>
		);
	}
}

export default MinToDonate;