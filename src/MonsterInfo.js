import React, { Component } from 'react';

class MonsterInfo extends Component {

	render () {
		let mdiff;

		mdiff = 7 - this.props.monsterLine[1];

		return ( 
			<ul>
				<li>{this.props.farmer} has killed a total of <strong>{this.props.monsterLine[0]} monsters</strong> and {this.props.farmer} has <strong>completed {this.props.monsterLine[1]}</strong> of 7 Monster Eradication Goals</li>
				{this.props.monsterLine[1] == 7 ? (
					<li><i>PROTECTOR OF THE VALLEY</i> achievement (all monster goals finished) <strong>done</strong></li>
				) : (
					<li><i>PROTECTOR OF THE VALLEY</i> achievement (all monster goals finished) -- <strong>need {mdiff} more level(s)</strong></li>
				)}
			</ul>
		);
	}
}

export default MonsterInfo;