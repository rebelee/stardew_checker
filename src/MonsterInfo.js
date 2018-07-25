import React, { Component } from 'react';

class MonsterInfo extends Component {

	render () {
		let mdiff;

		mdiff = 7 - this.props.monsterLine[1];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has killed a total of <strong>{this.props.monsterLine[0]} monsters</strong> and {this.props.farmer} has <strong>completed {this.props.monsterLine[1]}</strong> of 7 Monster Eradication Goals</li>
				<ul class = 'indent'>
					{this.props.monsterLine[1] == 7 ? (
						<li class = 'check'><i>PROTECTOR OF THE VALLEY</i> achievement (all monster goals finished) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>PROTECTOR OF THE VALLEY</i> achievement (all monster goals finished) -- <strong>need {mdiff} more level(s)</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default MonsterInfo;