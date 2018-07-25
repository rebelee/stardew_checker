import React, { Component } from 'react';

class MuseumInfo extends Component {

	render () {
 	 	let tdonate_diff;
 	 	let rdonate_diff;
 	 	let cdonate_diff;

 	 	tdonate_diff = 40 - this.props.museumLine;
 	 	rdonate_diff = 60 - this.props.museumLine;
 	 	cdonate_diff = 95 - this.props.museumLine;

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} has donated a <strong>{this.props.museumLine} of 95</strong> items to the museum</li>
				<ul class = 'indent'>
					{this.props.museumLine >= 40 ? (
						<li class = 'check'><i>TREASURE TROVE</i> achievement (donate 40 items) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>TREASURE TROVE</i> achievement (donate 40 items) -- <strong>need {tdonate_diff} more donations</strong></li>
					)}
					{this.props.museumLine >= 60 ? (
						<li class = 'check'>Rusty Key <strong>obtained</strong> (donate 60 items) done</li>
					) : (
						<li class = 'x'>Rusty Key <strong>possible</strong> (donate 60 items) -- <strong>need {rdonate_diff} more donations</strong></li>
					)}
					{this.props.museumLine == 95 ? (
						<li class = 'check'><i>A COMPLETE COLLECTION</i> achievement (donate every item) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>A COMPLETE COLLECTION</i> achievement (donate every item) -- <strong>need {cdonate_diff} more donations</strong><br /><li class = 'none'>See below for items that still need to be donated</li></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default MuseumInfo;