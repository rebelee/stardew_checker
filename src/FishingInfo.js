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
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} <strong>has caught {this.props.fishingLine[1]}</strong> of 62 different fish <strong>({this.props.fishingLine[0]} total)</strong></li>

				<ul class = 'indent'>
					{this.props.fishingLine[0] >= 100 ? (
						<li class = 'check'><i>MOTHER CATCH</i> achievement (catch 100 total fish) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>MOTHER CATCH</i> achievement (catch 100 total fish) -- <strong>need {mdiff} more fish</strong></li>
					)}
					{this.props.fishingLine[1] >= 10 ? (
						<li class = 'check'><i>FISHERMAN</i> achievement (catch 10 different fish) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>FISHERMAN</i> achievement (catch 10 different fish) -- <strong>need {fdiff} more types of fish</strong></li>
					)}
					{this.props.fishingLine[1] >= 24 ? (
						<li class = 'check'><i>OL' MARINER</i> achievement (catch 24 different fish) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>OL' MARINER</i> achievement (catch 24 different fish) -- <strong>need {odiff} more types of fish</strong></li>
					)}
					{this.props.fishingLine[1] >= 59 ? (
						<li class = 'check'><i>MASTER ANGLER</i> achievement (catch 59 different fish) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>MASTER ANGLER</i> achievement (catch 59 different fish) -- <strong>need {madiff} more types of fish</strong></li>
					)}
					{this.props.fishingLine[1] == 62 ? (
						<li class = 'check'>Catch every type of fish <strong>done</strong></li>
					) : (
						<li class = 'x'>Catch every type of fish -- <strong>need {diff} more types of fish</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default FishingInfo;