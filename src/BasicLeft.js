import React, { Component } from 'react';

class BasicLeft extends Component {

	render () {
		let bshipping = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let basics = {};

			var end_string = this.props.basicLeft[i].substring(this.props.basicLeft[i].indexOf(' -'))
			var link = wiki(this.props.basicLeft[i])

			{this.props.basicLeft[i] !== '' ? (
				basics['link'] = link,
				basics['end_string'] = end_string,
				bshipping.push(basics)
			) : (
				null
			)}
		}

		bshipping = bshipping.map(bshipping => <li class = 'indent'>{bshipping['link']}{bshipping['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Basic(s) left to ship:</li>
				<ul class = 'indent'>
					{bshipping}
				</ul>
			</ul>
		);
	}
}

export default BasicLeft;