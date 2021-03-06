import React, { Component } from 'react';

class Social10H extends Component {

	render () {
		let bh10diff;

		bh10diff = 8 - this.props.tenHeartLine;

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has <strong>{this.props.tenHeartLine} relationship(s)</strong> of 10+ hearts. </li>

				<ul class = 'indent'>
					{this.props.tenHeartLine >= 1 ? (
						<li class = 'check'><i>BEST FRIENDS</i> achievement (10H with 1 person) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>BEST FRIENDS</i> achievement (10H with 1 person) -- <strong>need 1 more friend</strong></li>
					)}
					{this.props.tenHeartLine >= 8 ? (
						<li class = 'check'><i>THE BELOVED FARMER</i> achievement (10H with 8 people) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>THE BELOVED FARMER</i> achievement (10H with 8 people) -- <strong>need {bh10diff} more friend(s)</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default Social10H;