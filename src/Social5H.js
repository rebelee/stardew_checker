import React, { Component } from 'react';

class Social5H extends Component {

	render () {
 	 	let ch5diff;
 	 	let nh5diff;
 	 	let ph5diff;

 	 	ch5diff = 4 - this.props.fiveHeartLine;
 	 	nh5diff = 10 - this.props.fiveHeartLine;
 	 	ph5diff = 20 - this.props.fiveHeartLine;

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has <strong>{this.props.fiveHeartLine} relationship(s)</strong> of 5+ hearts. </li>
				<ul class = 'indent'>
					{this.props.fiveHeartLine >= 1 ? (
						<li class = 'check'><i>A NEW FRIEND</i> achievement (5H with 1 person) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>A NEW FRIEND</i> achievement (5H with 1 person) -- <strong>need 1 more friend</strong></li>
					)}
					{this.props.fiveHeartLine >= 4 ? (
						<li class = 'check'><i>CLIQUES</i> achievement (5H with 4 people) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>CLIQUES</i> achievement (5H with 4 people) -- <strong>need {ch5diff} more friend(s)</strong></li>
					)}
					{this.props.fiveHeartLine >= 10 ? (
						<li class = 'check'><i>NETWORKING</i> achievement (5H with 10 people) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>NETWORKING</i> achievement (5H with 10 people) -- <strong>need {nh5diff} more friend(s)</strong></li>
					)}
					{this.props.fiveHeartLine >= 20 ? (
						<li class = 'check'><i>POPULAR</i> achievement (5H with 20 people) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>POPULAR</i> achievement (5H with 20 people) -- <strong>need {ph5diff} more friend(s)</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default Social5H;