import React, { Component } from 'react';

class HomeInfo extends Component {

	render () {
		let spouse;
		let one_kid;
 	 	let two_kids;
 	 	let no_kids;
 	 	let ldiff;
 	 	let fdiff;

 	 	spouse = false;
 	 	one_kid = false;
 	 	two_kids = false;
 	 	no_kids = false;

 	 	if (this.props.homeLine[0] !== '') {
 	 		spouse = true
 	 	}

 	 	if (this.props.homeLine[1] !== '' & this.props.homeLine[2] !== '') {
 	 		two_kids = true
 	 	} else if (this.props.homeLine[1] !== '' & this.props.homeLine[2] === '') {
 	 		one_kid = true
 	 	} else {
 	 		no_kids = true
 	 	}
 	 		
 	 	ldiff = 1 - this.props.homeLine[3];
 	 	fdiff = 3 - this.props.homeLine[3];

		return ( 
			<ul>
				{spouse ? (
					<li><strong>{this.props.farmer}'s spouse:</strong> {this.props.homeLine[0]}</li>
				) : (
					<li>{this.props.farmer} has <strong>no spouse</strong></li>
				)}

				{two_kids &&
					<li><strong>{this.props.farmer}'s children:</strong> {this.props.homeLine[1]}, {this.props.homeLine[2]}</li>}
				{one_kid &&
					<li><strong>{this.props.farmer}'s child:</strong> {this.props.homeLine[1]}</li>}
				{no_kids &&
					<li>{this.props.farmer} has <strong>no children</strong></li>}

				{(spouse && two_kids) &&
					<li><i>FULL HOUSE</i> (Married and 2 kids) <strong>done</strong></li>}
				{(spouse && one_kid) &&
					<li><i>FULL HOUSE</i> (Married and 2 kids) -- <strong>need 1 more kid</strong></li>}
				{(spouse && no_kids) &&
					<li><i>FULL HOUSE</i> (Married and 2 kids) -- <strong>need 2 more kids</strong></li>}
				{(!spouse && no_kids) &&
					<li><i>FULL HOUSE</i> (Married and 2 kids) -- <strong>need a spouse and 2 more kids</strong></li>}

				<li>Farm House <strong>upgraded {this.props.homeLine[3]}</strong> time(s) of 3 possible</li>
				{this.props.homeLine[3] >= 1 ? (
					<li><i>MOVING UP</i> (1 upgrade) <strong>done</strong></li>
				) : (
					<li><i>MOVING UP</i> (1 upgrade) -- <strong>need 1 more upgrade</strong></li>
				)}
				{this.props.homeLine[3] >= 2 ? (
					<li><i>LIVING LARGE</i> (2 upgrades) <strong>done</strong></li>
				) : (
					<li><i>LIVING LARGE</i> (2 upgrades) -- <strong>need {ldiff} more upgrade(s)</strong></li>
				)}
				{this.props.homeLine[3] == 3 ? (
					<li>House fully upgraded (3 upgrades) <strong>done</strong></li>
				) : (
					<li>House fully upgraded (3 upgrades) -- <strong>need {fdiff} more upgrade(s)</strong></li>
				)}
			</ul>
		);
	}
}

export default HomeInfo;