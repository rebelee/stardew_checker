import React, { Component } from 'react';

class FirstInfo extends Component {

	render () {
		return ( 
			<ul class = 'main'> 
				<li class = 'main-list'><strong>Farmer Name: </strong>{this.props.firstLine[0]}</li> 
				<li class = 'main-list'><strong>Farm Name: </strong>{this.props.firstLine[1]}</li> 
				<li class = 'main-list'><strong>Pet Type: </strong>{this.props.firstLine[2]}</li> 
				<li class = 'main-list'><strong>Favorite Thing: </strong>{this.props.firstLine[3]}</li> 
			</ul>
		);
	}
}

export default FirstInfo;