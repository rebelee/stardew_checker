import React, { Component } from 'react';

class QuestInfo extends Component {

	render () {
		let gdiff;
		let adiff;

		gdiff = 10 - this.props.questLine;
		adiff = 40 - this.props.questLine;

		return ( 
			<ul>
				<li>{this.props.farmer} <strong>has completed {this.props.questLine}</strong> 'Help Wanted' quest(s)</li>

				{this.props.questLine >= 10 ? (
					<li><i>GOFER</i> achievement (complete 10 quests) <strong>done</strong></li>
				) : (
					<li><i>GOFER</i> achievement (complete 10 quests) -- <strong>need {gdiff} more quests</strong></li>
				)}
				{this.props.questLine >= 40 ? (
					<li><i>A BIG HELP</i> achievement (complete 40 quests) <strong>done</strong></li>
				) : (
					<li><i>A BIG HELP</i> achievement (complete 40 quests) -- <strong>need {adiff} more quests</strong></li>
				)}
			</ul>
		);
	}
}

export default QuestInfo;