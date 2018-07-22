import React, { Component } from 'react';

class CenterInfo extends Component {

	render () {
		let numJojaDiff;
		let ldiff;

		numJojaDiff = 5 - this.props.centerLine[3];
		ldiff = 6 - this.props.centerLine[3];

		return ( 
			<ul>
				{this.props.centerLine[0] === 'TRUE' ? (
					<li>{this.props.farmer} <strong>is</strong> a Joja Member and <strong>cannot complete</strong> the Community Center bundles</li>
				) : (
					<li>{this.props.farmer} <strong>is not</strong> a Joja Member and has completed <strong>{this.props.centerLine[3]}</strong> of the 6 Community Center Rooms</li>
				)}

				{this.props.centerLine[0] === 'TRUE' && this.props.centerLine[1] === 'TRUE' ? (
					<li>{this.props.farmer} <strong>has attended</strong> the completion ceremony<br /><li><i>JOJA CO. MEMBER OF THE YEAR</i> achievement (become a Joja member and purchase all community development perks) <strong>done</strong></li><li><i>LOCAL LEGEND</i><strong> impossible</strong></li></li>
				) : (
					null
				)}

				{this.props.centerLine[1] === 'FALSE' && this.props.centerLine[3] === 5 ? (
					<li>{this.props.farmer} <strong>has not attended</strong> the completion ceremony<br /><li><i>JOJA CO. MEMBER OF THE YEAR</i> achievement (become a Joja member and purchase all community development perks) <strong>done</strong></li><li><i>LOCAL LEGEND</i><strong> impossible</strong></li></li>
				) : (
					null
				)}

				{this.props.centerLine[1] === 'FALSE' && this.props.centerLine[3] <= 5 ? (
					<li>{this.props.farmer} <strong>has not attended</strong> the completion ceremony<br /><li><i>JOJA CO. MEMBER OF THE YEAR</i> achievement (become a Joja member and purchase all community development perks) --<strong> need {numJojaDiff} more perk(s)</strong></li><li><i>LOCAL LEGEND</i><strong> impossible</strong></li></li>
				) : (
					null
				)}

				{this.props.centerLine[0] === 'FALSE' && this.props.centerLine[2] === 'TRUE' ? (
					<li>{this.props.farmer} <strong>has attended</strong> the completion ceremony<br /><li><i>JOJA CO. MEMBER OF THE YEAR</i> achievement (become a Joja member and purchase all community development perks) <strong>impossible</strong></li><li><i>LOCAL LEGEND</i><strong> done</strong></li></li>
				) : (
					null
				)}

				{this.props.centerLine[2] === 'FALSE' && this.props.centerLine[3] === 6 ? (
					<li>{this.props.farmer} <strong>has not attended</strong> the completion ceremony<br /><li><i>JOJA CO. MEMBER OF THE YEAR</i> achievement (become a Joja member and purchase all community development perks) <strong>impossible</strong></li><li><i>LOCAL LEGEND</i><strong> done</strong></li></li>
				) : (
					null
				)}

				{this.props.centerLine[2] === 'FALSE' && this.props.centerLine[3] !== 6 ? (
					<li>{this.props.farmer} <strong>has not attended</strong> the completion ceremony<br /><li><i>JOJA CO. MEMBER OF THE YEAR</i> achievement (become a Joja member and purchase all community development perks) <strong>impossible</strong></li><li><i>LOCAL LEGEND</i> -- <strong>need {ldiff}</strong> more</li></li>
				) : (
					null
				)}
			</ul>
		);
	}
}

export default CenterInfo;


// formatCenterAchieve(farmer, centerLine) {
//   	let center 
//   	let centerDiff

//   	} else {

//   		if (centerLine[2]=='TRUE') {
//   			center = center + farmer + ' has attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) IMPOSSIBLE\nLocal Legend done'
//   		} else {
//   			if (centerLine[3] == 6) {
//   			center = center + farmer + ' has not attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) IMPOSSIBLE\nLocal Legend done'  				
//   			} else {
//   				centerDiff = 6 - centerLine[3]
//   				center = center + farmer + ' has not attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) IMPOSSIBLE\nLocal Legend -- need' + centerDiff + ' more'

//   			}
//   		}
//   	}

//   	return center.split('\n').map(achievement => <li>{achievement}</li>);
//   }
