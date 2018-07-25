import React, { Component } from 'react';

class PolyLeft extends Component {

	render () {
		let pshipping = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let poly = {};

			var end_string = this.props.polyLeft[i].substring(this.props.polyLeft[i].indexOf(' -'))
			var link = wiki(this.props.polyLeft[i])

			{this.props.polyLeft[i] !== '' ? (
				poly['link'] = link,
				poly['end_string'] = end_string,
				pshipping.push(poly)
			) : (
				null
			)}
		}

		pshipping = pshipping.map(pshipping => <li class = 'indent'>{pshipping['link']}{pshipping['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Polyculture item(s) left to ship:</li>
				<ul class = 'indent'>
					{pshipping}
				</ul>
			</ul>
		);
	}
}

export default PolyLeft;