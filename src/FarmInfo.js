import React, { Component } from 'react';

class FarmInfo extends Component {

	render () {
		return ( 
			<ul class = 'main'> 
				<li class = 'main-list'><strong>Farm Type: </strong>{this.props.farmLine[0]}</li> 
				<li class = 'main-list'><strong>Day: </strong>{this.props.farmLine[1]}</li>
				<li class = 'main-list'><strong>Season: </strong>{this.props.farmLine[2]}</li> 
				<li class = 'main-list'><strong>Year: </strong>{this.props.farmLine[3]}</li>
			</ul>
		);
	}
}

export default FarmInfo;