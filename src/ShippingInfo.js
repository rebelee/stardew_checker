import React, { Component } from 'react';

class ShippingInfo extends Component {

	render () {
		let fdiff;
		let mdiff;
		let pdiff;

		fdiff = 126 - this.props.shipLine[0];
		mdiff = 300 - this.props.shipLine[2];
		pdiff = 28 - this.props.shipLine[3];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} <strong>has shipped {this.props.shipLine[0]}</strong> of 126 basic items</li>
				<ul class = 'indent'>
					{this.props.shipLine[0] == 126 ? (
						<li class = 'check'><i>FULL SHIPMENT</i> achievement (ship every item) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>FULL SHIPMENT</i> achievement (ship every item) -- <strong>need {fdiff} more items</strong></li>
					)}
				</ul>
				<br />

				<li class = 'main-list'>{this.props.farmer} has shipped<strong> {this.props.shipLine[1]}</strong> the most ({this.props.shipLine[2]})</li>
				<ul class = 'indent'>
					{this.props.shipLine[2] >= 300 ? (
						<li class = 'check'><i>MONOCULTURE</i> achievement (ship 300 of one crop) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>MONOCULTURE</i> achievement (ship 300 of one crop) -- <strong>need {mdiff} more items</strong></li>
					)}
				</ul>
				<br />
				
				<li class = 'main-list'>{this.props.farmer} has shipped 15 items from<strong> {this.props.shipLine[3]}</strong> of 28 different crops</li>
				<ul class = 'indent'>
					{this.props.shipLine[3] == 28 ? (
						<li class = 'check'><i>POLYCULTURE</i> achievement (ship 15 of each crop) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>POLYCULTURE</i> achievement (ship 15 of each crop) -- <strong>need {pdiff} more items</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default ShippingInfo;