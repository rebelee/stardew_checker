import React, { Component } from 'react';

class FarmInfo extends Component {

	render () {
		return ( 
			<ul> 
				<li><strong>Farm Type: </strong>{this.props.farmLine[0]}</li> 
				<li><strong>Day: </strong>{this.props.farmLine[1]}</li>
				<li><strong>Season: </strong>{this.props.farmLine[2]}</li> 
				<li><strong>Year: </strong>{this.props.farmLine[3]}</li>
			</ul>
		);
	}
}

export default FarmInfo;