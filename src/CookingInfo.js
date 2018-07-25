import React, { Component } from 'react';

class CookingInfo extends Component {

	render () {
		let cdonate_diff;
		let sdonate_diff;
		let gdonate_diff;

		cdonate_diff = 10 - this.props.cookingLine[1];
		sdonate_diff = 25 - this.props.cookingLine[1];
		gdonate_diff = 71 - this.props.cookingLine[1];

		return ( 
			<ul class = 'main'>
				<li class = 'main-list'>{this.props.farmer} <strong>knows {this.props.cookingLine[0]}</strong> recipes and has <strong>cooked {this.props.cookingLine[1]}</strong> of 71 recipes</li>
				
				<ul class = 'indent'>
					{this.props.cookingLine[1] >= 10 ? (
						<li class = 'check'><i>COOK</i> achievement (cook 10 different recipes) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>COOK</i> achievement (cook 10 different recipes) -- <strong>need {cdonate_diff} more recipes</strong></li>
					)}
					{this.props.cookingLine[1] >= 25 ? (
						<li class ='check'><i>SOUS CHEF</i> achievement (cook 25 different recipes) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>SOUS CHEF</i> achievement (cook 25 different recipes) -- <strong>need {sdonate_diff} more recipes</strong></li>
					)}
					{this.props.cookingLine[1] == 71 ? (
						<li class = 'check'><i>GOURMET CHEF</i> achievement (cook every recipe) <strong>done</strong></li>
					) : (
						<li class = 'x'><i>GOURMET CHEF</i> achievement (cook every recipe) -- <strong>need {gdonate_diff} more recipes</strong></li>
					)}
				</ul>
			</ul>
		);
	}
}

export default CookingInfo;