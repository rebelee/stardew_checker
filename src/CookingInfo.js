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
			<ul>
				<li>{this.props.farmer} <strong>knows {this.props.cookingLine[0]}</strong> recipes and has <strong>cooked {this.props.cookingLine[1]}</strong> of 71 recipes</li>
				
				{this.props.cookingLine[1] >= 10 ? (
					<li><i>COOK</i> achievement (cook 10 different recipes) <strong>done</strong></li>
				) : (
					<li><i>COOK</i> achievement (cook 10 different recipes) -- <strong>need {cdonate_diff} more recipes</strong></li>
				)}
				{this.props.cookingLine[1] >= 25 ? (
					<li><i>SOUS CHEF</i> achievement (cook 25 different recipes) <strong>done</strong></li>
				) : (
					<li><i>SOUS CHEF</i> achievement (cook 25 different recipes) -- <strong>need {sdonate_diff} more recipes</strong></li>
				)}
				{this.props.cookingLine[1] == 71 ? (
					<li><i>GOURMET CHEF</i> achievement (cook every recipe) <strong>done</strong></li>
				) : (
					<li><i>GOURMET CHEF</i> achievement (cook every recipe) -- <strong>need {gdonate_diff} more recipes</strong></li>
				)}
			</ul>
		);
	}
}

export default CookingInfo;