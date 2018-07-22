import React, { Component } from 'react';

class FishingInfo extends Component {

	render () {
		let mdiff;
		let fdiff;
		let odiff;
		let madiff;
		let diff;

		mdiff = 100 - this.props.fishingLine[0];
		fdiff = 10 - this.props.fishingLine[1];
		odiff = 24 - this.props.fishingLine[1];
		madiff = 59 - this.props.fishingLine[1];
		diff = 62 - this.props.fishingLine[1];

		return ( 
			<ul>
				<li>{this.props.farmer} <strong>has caught {this.props.fishingLine[1]}</strong> of 62 different fish <strong>({this.props.fishingLine[0]} total)</strong></li>

				{this.props.fishingLine[0] >= 100 ? (
					<li><i>MOTHER CATCH</i> achievement (catch 100 total fish) <strong>done</strong></li>
				) : (
					<li><i>MOTHER CATCH</i> achievement (catch 100 total fish) -- <strong>need {mdiff} more fish</strong></li>
				)}
				{this.props.fishingLine[1] >= 10 ? (
					<li><i>FISHERMAN</i> achievement (catch 10 different fish) <strong>done</strong></li>
				) : (
					<li><i>FISHERMAN</i> achievement (catch 10 different fish) -- <strong>need {fdiff} more types of fish</strong></li>
				)}
				{this.props.fishingLine[1] >= 24 ? (
					<li><i>OL' MARINER</i> achievement (catch 24 different fish) <strong>done</strong></li>
				) : (
					<li><i>OL' MARINER</i> achievement (catch 24 different fish) -- <strong>need {odiff} more types of fish</strong></li>
				)}
				{this.props.fishingLine[1] >= 59 ? (
					<li><i>MASTER ANGLER</i> achievement (catch 59 different fish) <strong>done</strong></li>
				) : (
					<li><i>MASTER ANGLER</i> achievement (catch 59 different fish) -- <strong>need {madiff} more types of fish</strong></li>
				)}
				{this.props.fishingLine[1] == 62 ? (
					<li>Catch every type of fish <strong>done</strong></li>
				) : (
					<li>Catch every type of fish -- <strong>need {diff} more types of fish</strong></li>
				)}
			</ul>
		);
	}
}

export default FishingInfo;