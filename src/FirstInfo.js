import React, { Component } from 'react';

class FirstInfo extends Component {

	render () {
		return ( 
			<ul> 
				<li><strong>Farmer Name: </strong>{this.props.firstLine[0]}</li> 
				<li><strong>Farm Name: </strong>{this.props.firstLine[0]}</li> 
				<li><strong>Pet Type: </strong>{this.props.firstLine[0]}</li> 
				<li><strong>Favorite Thing: </strong>{this.props.firstLine[0]}</li> 
			</ul>
		);
	}
}

export default FirstInfo;