import React, { Component } from 'react';

class FamilyHearts extends Component {

	render () {
		let length;
		let spouseSplit;
		let childOneSplit;
		let childTwoSplit;

		length = this.props.childHearts.length;

		if(length >= 1) {
			spouseSplit = this.props.childHearts[0].split(":");
		}
		if (length >= 2) {
			childOneSplit = this.props.childHearts[1].split(":");
		}
		if (length >= 3) {
			childTwoSplit = this.props.childHearts[2].split(":");
		}

		return ( 
			<ul>
				<li><strong>{spouseSplit[0]}:</strong> {spouseSplit[1]}</li>
				<li><strong>{childOneSplit[0]}:</strong> {childOneSplit[1]}</li>
				<li><strong>{childTwoSplit[0]}:</strong> {childTwoSplit[1]}</li>
			</ul>
		);
	}
}

export default FamilyHearts;