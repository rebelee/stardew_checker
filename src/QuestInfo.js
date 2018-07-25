import React, { Component } from 'react';

class QuestInfo extends Component {

	render () {
		let gdiff;
		let adiff;

		gdiff = 10 - this.props.questLine;
		adiff = 40 - this.props.questLine;

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} <strong>has completed {this.props.questLine}</strong> 'Help Wanted' quest(s)</li>

				<ul class = 'indent'>
					{this.props.questLine >= 10 ? (
						<li class = 'check'><i>GOFER</i> achievement (complete 10 quests) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>GOFER</i> achievement (complete 10 quests) -- <strong>need {gdiff} more quests</strong></li>
					)}
					{this.props.questLine >= 40 ? (
						<li class = 'check'><i>A BIG HELP</i> achievement (complete 40 quests) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>A BIG HELP</i> achievement (complete 40 quests) -- <strong>need {adiff} more quests</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default QuestInfo;