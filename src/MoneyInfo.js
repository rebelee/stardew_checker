import React, { Component } from 'react';

class MoneyInfo extends Component {

	render () {
 	 	let ggreenhorn_diff;
 	 	let cgreenhorn_diff;
 	 	let hgreenhorn_diff;
 	 	let mgreenhorn_diff;
 	 	let lgreenhorn_diff;
   		let prettyMoney;
		
		prettyMoney = this.props.moneyLine.toLocaleString();
		ggreenhorn_diff = (1.5e4 - this.props.moneyLine).toLocaleString();
		cgreenhorn_diff = (5e4 - this.props.moneyLine).toLocaleString();
		hgreenhorn_diff = (2.5e5 - this.props.moneyLine).toLocaleString();
		mgreenhorn_diff = (1e6 - this.props.moneyLine).toLocaleString();
		lgreenhorn_diff = (1e7 - this.props.moneyLine).toLocaleString();

		return ( 
			<ul class = 'main'> 
				<li class = 'main-list'>{this.props.farmer} has earned a <strong>total of {prettyMoney}g</strong></li>
				<ul class = 'indent'>
					{this.props.moneyLine >= 1.5e4 ? (
						<li class = 'check'><i>GREENHORN</i> achievement (earn 15,000g) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>GREENHORN</i> achievement (earn 15,000g) -- <strong>need {ggreenhorn_diff}g more</strong></li>
					)}
					{this.props.moneyLine >= 5e4 ? (
						<li class = 'check'><i>COWPOKE</i> achievement (earn 50,000g) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>COWPOKE</i> achievement (earn 50,000g) -- <strong>need {cgreenhorn_diff}g more</strong></li>
					)}
					{this.props.moneyLine >= 2.5e5 ? (
						<li class = 'check'><i>HOMESTEADER</i> achievement (earn 250,000g) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>HOMESTEADER</i> achievement (earn 250,000g) -- <strong>need {hgreenhorn_diff}g more</strong></li>
					)}
					{this.props.moneyLine >= 1e6 ? (
						<li class = 'check'><i>MILLIONAIRE</i> achievement (earn 1,000,000g) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>MILLIONAIRE</i> achievement (earn 1,000,000g) -- <strong>need {mgreenhorn_diff}g more</strong></li>
					)}
					{this.props.moneyLine >= 1e7 ? (
						<li class = 'check'><i>LEGEND</i> achievement (earn 10,000,000g) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>LEGEND</i> achievement (earn 10,000,000g) -- <strong>need {lgreenhorn_diff}g more</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default MoneyInfo;