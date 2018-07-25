import React, { Component } from 'react';

class ArtToDonate extends Component {

	render () {
		let artifacts = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		let end_string;
		let link;

		for (var i = 0; i <= this.props.length-1; i++) {
			let artifact = {};

			end_string = this.props.artToDonate[i].substring(this.props.artToDonate[i].indexOf(' -'))
			link = wiki(this.props.artToDonate[i])

			{this.props.artToDonate[i] !== '' ? (
				artifact['link'] = link,
				artifact['end_string'] = end_string,
				artifacts.push(artifact)
			) : (
				null
			)}
		}

		artifacts = artifacts.map(artifacts => <li class = 'indent'>{artifacts['link']}{artifacts['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Artifacts(s) left to donate:</li>
				<ul class = 'indent'>
					{artifacts}
				</ul>
			</ul>
		);
	}
}

export default ArtToDonate;