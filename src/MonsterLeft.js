import React, { Component } from 'react';

class MonsterLeft extends Component {

	render () {
		let monsters = [];

		function wiki(item, link) {
			var trimmed = item.substring(0, item.indexOf(' -'))
			trimmed = trimmed.replace(/ /g, '_');

			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + trimmed}>{item.substring(0, item.indexOf(' -'))}</a>)
		}

		for (var i = 0; i <= this.props.length-1; i++) {
			let monster = {};

			var end_string = this.props.monsterLeft[i].substring(this.props.monsterLeft[i].indexOf(' -'))
			var link = wiki(this.props.monsterLeft[i])

			{this.props.monsterLeft[i] !== '' ? (
				monster['link'] = link,
				monster['end_string'] = end_string,
				monsters.push(monster)
			) : (
				null
			)}
		}

		monsters = monsters.map(monsters => <li class = 'indent'>{monsters['link']}{monsters['end_string']}</li>);

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>Monster Eradication Goal(s) left to finish:</li>
				<ul class = 'indent'>
					{monsters}
				</ul>
			</ul>
		);
	}
}

export default MonsterLeft;