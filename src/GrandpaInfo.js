import React, { Component } from 'react';

class GrandpaInfo extends Component {

	render () {
		let candle_diff;

		candle_diff = 4 - this.props.grandpaLine[2];

		let prettyMoney;
		let adiff;
		let bdiff;
		let cdiff;
		let ddiff;
		let ediff;
		let fdiff;

		prettyMoney = (parseInt(this.props.grandpaLine[3])).toLocaleString();

		adiff = 5e4 - this.props.grandpaLine[3];
		bdiff = 1e5 - this.props.grandpaLine[3];
		cdiff = 2e5 - this.props.grandpaLine[3];
		ddiff = 3e5 - this.props.grandpaLine[3];
		ediff = 5e5 - this.props.grandpaLine[3];
		fdiff = 1e6 - this.props.grandpaLine[3];

		let gdiff;
		let hdiff;

		gdiff = 30 - this.props.grandpaLine[10];
		hdiff = 50 - this.props.grandpaLine[10];

		let idiff;
		let jdiff;
		let kdiff;

		idiff = 5 - this.props.grandpaLine[11];
		jdiff = 10 - this.props.grandpaLine[11];
		kdiff = 999 - this.props.grandpaLine[12];

		let ldiff;
		let mdiff;

		ldiff = 2 - this.props.grandpaLine[14];
		mdiff = 2 - this.props.grandpaLine[14];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has earned a total of <strong>{this.props.grandpaLine[0]} point(s) </strong> (details below); the maximum possible is 21 points</li>
				<li class = 'main-list'>The shrine has <strong>{this.props.grandpaLine[1]} candle(s) </strong> lit. The next evaluation will light <strong>{this.props.grandpaLine[2]} candle(s)</strong></li>
				
				{this.props.grandpaLine[2] >= 4 ? (
					<li  class = 'check'>Four candle evaluation <strong>done</strong></li>
				) : (
					<li class = 'x'>Four candle evaluation -- <strong>need {candle_diff} more</strong> candle(s)</li>
				)}

				<br />

				<li class = 'main-list'>{this.props.farmer} has earned a total of <strong>{prettyMoney}g</strong></li>

				<ul class = 'indent'>
					{this.props.grandpaLine[3] >= 5e4 ? (
						<li class = 'check'><strong>+1 earned</strong> (at least 50,000g earnings) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (at least 50,000g earnings) -- <strong>need {adiff}g more</strong></li>
					)}
					{this.props.grandpaLine[3] >= 1e5 ? (
						<li class = 'check'><strong>+1 earned</strong> (at least 100,000g earnings) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (at least 100,000g earnings) -- <strong>need {bdiff}g more</strong></li>
					)}
					{this.props.grandpaLine[3] >= 2e5 ? (
						<li class = 'check'><strong>+1 earned</strong> (at least 200,000g earnings) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (at least 200,000g earnings) -- <strong>need {cdiff}g more</strong></li>
					)}
					{this.props.grandpaLine[3] >= 3e5 ? (
						<li class = 'check'><strong>+1 earned</strong> (at least 300,000g earnings) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (at least 300,000g earnings) -- <strong>need {ddiff}g more</strong></li>
					)}
					{this.props.grandpaLine[3] >= 5e5 ? (
						<li class = 'check'><strong>+1 earned</strong> (at least 500,000g earnings) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (at least 500,000g earnings) -- <strong>need {ediff}g more</strong></li>
					)}
					{this.props.grandpaLine[3] >= 1e6 ? (
						<li class = 'check'><strong>+2 earned</strong> (at least 1,000,000g earnings) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+2 possible</i> (at least 1,000,000g earnings) -- <strong>need {fdiff}g more</strong></li>
					)}
				</ul>
				<br />

				<li class = 'main-list'>{this.props.farmer} has earned <strong>{this.props.grandpaLine[4]}</strong> of 3 relevant achievements</li>
				<ul class = 'indent'>
					{this.props.grandpaLine[5] ==='TRUE' ? (
						<li class = 'check'><strong>+1 done</strong> (A Complete Collection Achievement)</li>
					) : (
						<li class = 'x'><i>+1 possible</i> (A Complete Collection Achievement)</li>
					)}
					{this.props.grandpaLine[6] ==='TRUE' ? (
						<li class = 'check'><strong>+1 done</strong> (Master Angler Achievement)</li>
					) : (
						<li class = 'x'><i>+1 possible</i> (Master Angler Achievement)</li>
					)}
					{this.props.grandpaLine[7] ==='TRUE' ? (
						<li class = 'check'><strong>+1 done</strong> (Full Shipment Achievement)</li>
					) : (
						<li class = 'x'><i>+1 possible</i> (Full Shipment Achievement)</li>
					)}
				</ul>
				<br />

				{this.props.grandpaLine[8] ==='TRUE' ? (
					<li class = 'main-list'>{this.props.farmer} has <strong>completed</strong> the Community Center restoration and has <strong>attended</strong> the re-opening ceremony<ul class = 'indent'><li class = 'check'><strong>+1 earned</strong> (complete Community Center)</li><li class = 'check'><strong>+2 earned</strong> (attend the Community Center re-opening)</li></ul></li>
				) : (
					null
				)}
				{this.props.grandpaLine[8] ==='FALSE' && this.props.grandpaLine[9] ===6 ? (
					<li class = 'main-list'>{this.props.farmer} has <strong>completed</strong> the Community Center restoration and has <strong>not attended</strong> the re-opening ceremony<ul class = 'indent'><li class = 'check'><strong>+1 earned</strong> (complete Community Center)</li><li class = 'x'><i>+2 possible</i> (attend the Community Center re-opening)</li></ul></li>
				) : (
					null
				)}
				{this.props.grandpaLine[8] ==='FALSE' && this.props.grandpaLine[9] !==6 ? (
					<li class = 'main-list'>{this.props.farmer} has <strong>not completed</strong> the Community Center restoration and has <strong>not attended</strong> the re-opening ceremony<ul class = 'indent'><li class = 'x'><i>+1 possible</i> (complete Community Center)</li><li class = 'x'><i>+2 possible</i> (attend the Community Center re-opening)</li></ul></li>
				) : (
					null
				)}
				<br />

				<li class = 'main-list'>{this.props.farmer} has <strong>{this.props.grandpaLine[10]}</strong> total skill level(s)</li>
				
				<ul class = 'indent'>
					{this.props.grandpaLine[10] >= 30 ? (
						<li class = 'check'><strong>+1 earned</strong> (30 total skill levels) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (30 total skill levels) -- <strong>need {gdiff} more skill level(s)</strong></li>
					)}
					{this.props.grandpaLine[10] >= 50 ? (
						<li class = 'check'><strong>+1 earned</strong> (50 total skill levels) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (50 total skill levels) -- <strong>need {hdiff} more skill level(s)</strong></li>
					)}
				</ul>
				<br />

				<li class = 'main-list'>{this.props.farmer} has <strong>{this.props.grandpaLine[11]}</strong> relationship(s) of 1975+ friendship points (~8H)</li>
				<ul class = 'indent'>
					{this.props.grandpaLine[11] >= 5 ? (
						<li class = 'check'><strong>+1 earned</strong> (8H with 5 people) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (8H with 5 people) -- <strong>need {idiff} more people at 8H</strong></li>
					)}
					{this.props.grandpaLine[11] >= 10 ? (
						<li class = 'check'><strong>+1 earned</strong> (8H with 10 people) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (8H with 10 people) -- <strong>need {jdiff} more people at 8H</strong></li>
					)}
				</ul>
				<li class = 'main-list'>{this.props.farmer} has a pet with <strong>{this.props.grandpaLine[12]}</strong> friendship point(s)</li>
				<ul class = 'indent'>
					{this.props.grandpaLine[12] >= 999 ? (
						<li class = 'check'><strong>+1 earned</strong> (pet with at least 999 friendship points) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (pet with at least 999 friendship points) -- <strong>need {kdiff} more points</strong></li>
					)}
				</ul>
				<br />

				{parseInt(this.props.grandpaLine[13]) === 1 ? (
					<li class = 'main-list'>{this.props.farmer} <strong>is married</strong> and has upgraded the farmouse <strong>{this.props.grandpaLine[14]}</strong> time(s)</li>
				) : (
					<li class = 'main-list'>{this.props.farmer} <strong>is not married</strong> and has upgraded the farmouse <strong>{this.props.grandpaLine[14]}</strong> time(s)</li>
				)}
				<ul class = 'indent'>
					{parseInt(this.props.grandpaLine[13]) === 1 && this.props.grandpaLine[14] >= 2? (
						<li class = 'check'><strong>+1 earned</strong> (married with at least 2 house upgrades) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>+1 possible</i> (married with at least 2 house upgrades) -- <strong>need {ldiff} more upgrade(s)</strong></li>
					)}
					{parseInt(this.props.grandpaLine[13]) !== 1 && this.props.grandpaLine[14] >= 2 ? (
						<li class = 'x'><i>+1 possible</i> (married with at least 2 house upgrades) -- <strong>need a spouse</strong></li>
					) : (
						null
					)}
					{parseInt(this.props.grandpaLine[13]) !== 1 && this.props.grandpaLine[14] < 2 ? (
						<li class = 'x'><i>+1 possible</i> (married with at least 2 house upgrades) -- <strong>need a spouse and {mdiff} more upgrade(s)</strong></li>
					) : (
						null
					)}
				</ul>
				<br />

				{this.props.grandpaLine[15] ==='true' ? (
					<li class = 'main-list'>{this.props.farmer} <strong>has acquired</strong> the Rusty Key</li>
				) : (
					<li class = 'main-list'>{this.props.farmer} <strong>has not acquired</strong> the Rusty Key</li>
				)}
				{this.props.grandpaLine[16] ==='true' ? (
					<li class = 'main-list'>{this.props.farmer} <strong>has acquired</strong> the Skull Key</li>
				) : (
					<li class = 'main-list'>{this.props.farmer} <strong>has not acquired</strong> the Skull Key</li>
				)}
				
				{this.props.grandpaLine[15] ==='true' && this.props.grandpaLine[16] === 'true' ? (
					<ul class = 'indent'>
						<li class = 'check'><strong>+1 earned</strong> (has the Rusty Key)</li>
						<li class = 'check'><strong>+1 earned</strong> (has the Skull Key)</li>
					</ul>
				) : (
					null
				)}
				{this.props.grandpaLine[15] ==='true' && this.props.grandpaLine[16] === 'false' ? (
					<ul class = 'indent'>
						<li class = 'check'><strong>+1 earned</strong> (has the Rusty Key)</li>
						<li class = 'x'><i>+1 possible</i> (has the Skull Key)</li>
					</ul>
				) : (
					null
				)}
				{this.props.grandpaLine[15] ==='false' && this.props.grandpaLine[16] === 'false' ? (
					<ul class = 'indent'>
						<li class = 'x'><i>+1 possible</i> (has the Rusty Key)</li>
						<li class = 'x'><i>+1 possible</i> (has the Skull Key)</li>
					</ul>
				) : (
					null
				)}
			</ul>
		);
	}
}

export default GrandpaInfo;