import React, { Component } from 'react';

class GrandpaInfo extends Component {

	render () {

		return ( 
			<ul>
				<li>{this.props.farmer} has earned a total of <strong>{this.props.grandpaLine[0]} point(s) </strong> (details below); the maximum possible is 21 points</li>
				<li>The shrine has <strong>{this.props.grandpaLine[1]} candle(s) </strong> lit. The next evaluation will light <strong>{this.props.grandpaLine[2]} candle(s)</strong></li>
				
			</ul>
		);
	}
}

export default GrandpaInfo;




// formatGrandpa(farmer, grandpaLine) {
//   	let grandpa
//   	let candleDiff
//   	let moneyDiff
//   	let skillDiff
//   	let friendDiff
//   	let petDiff
//   	let upgradeDiff
//   	let prettyMoney


//   	{(grandpaLine[2] >= 4) ? grandpa = grandpa + 'Four candle evaluation done\n' : (candleDiff = 4 - grandpaLine[2]) + (grandpa = grandpa + 'Four candle evaluation -- need ' + candleDiff + ' more candle(s)\n')};


//   	prettyMoney = parseInt(grandpaLine[3])
//   	prettyMoney = prettyMoney.toLocaleString()

//   	grandpa = grandpa + farmer + ' has earned a total of ' + prettyMoney + 'g.\n'

//   	{(grandpaLine[3] >= 5e4) ? grandpa = grandpa + '+1 earned (at least 50,000g earnings) done\n' : (moneyDiff = 5e4 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 50,000g earnings) -- need ' + moneyDiff + 'g more\n')};

//   	{(grandpaLine[3] >= 1e5) ? grandpa = grandpa + '+1 earned (at least 100,000g earnings) done\n' : (moneyDiff = 1e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 100,000g earnings) -- need ' + moneyDiff + 'g more\n')};

//   	{(grandpaLine[3] >= 2e5) ? grandpa = grandpa + '+1 earned (at least 200,000g earnings) done\n' : (moneyDiff = 2e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 200,000g earnings) -- need ' + moneyDiff + 'g more\n')};

//   	{(grandpaLine[3] >= 3e5) ? grandpa = grandpa + '+1 earned (at least 300,000g earnings) done\n' : (moneyDiff = 3e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 300,000g earnings) -- need ' + moneyDiff + 'g more\n')};

//   	{(grandpaLine[3] >= 5e5) ? grandpa = grandpa + '+1 earned (at least 500,000g earnings) done\n' : (moneyDiff = 5e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 500,000g earnings) -- need ' + moneyDiff + 'g more\n')};

//   	{(grandpaLine[3] >= 1e6) ? grandpa = grandpa + '+2 earned (at least 1,000,000g earnings) done\n' : (moneyDiff = 1e6 - grandpaLine[3]) + (grandpa = grandpa + '+2 possible (at least 1,000,000g earnings) -- need ' + moneyDiff + 'g more\n')};

//   	grandpa = grandpa + farmer + ' has earend ' + grandpaLine[4] + ' of 3 relevant achievements.\n'

//   	{(grandpaLine[5]=='TRUE') ? grandpa = grandpa + '+1 done (A Complete Collection Achievement)\n' : grandpa = grandpa + '+1 possible (A Complete Collection Achievement)\n'}

//   	{(grandpaLine[6]=='TRUE') ? grandpa = grandpa + '+1 done (Master Angler Achievement)\n' : grandpa = grandpa + '+1 possible (Master Angler Achievement)\n'}

//   	{(grandpaLine[7]=='TRUE') ? grandpa = grandpa + '+1 done (Full Shipment Achievement)\n' : grandpa = grandpa + '+1 possible (Full Shipment Achievement)\n'}

//   	if (grandpaLine[8]=='TRUE') {
//   		grandpa = grandpa + farmer + ' has completed the Community Center restoration and attended the re-opening ceremony.\n+1 earned (complete Community Center)\n+2 earned (attend the Community Center re-opening)\n'
//   	} else if (grandpaLine[9]==6) {
//    		grandpa = grandpa + farmer + ' has completed the Community Center restoration and has not attended the re-opening ceremony.\n+1 earned (complete Community Center)\n+2 possible (attend the Community Center re-opening)\n'	
//   	} else {
//    		grandpa = grandpa + farmer + ' has not completed the Community Center restoration and has not attended the re-opening ceremony.\n+1 possible (complete Community Center)\n+2 possible (attend the Community Center re-opening)\n'	
//   	}

//   	grandpa = grandpa + ' has ' + grandpaLine[10] + ' total skill levels\n'

//   	{(grandpaLine[10] >= 30) ? grandpa = grandpa + '+1 earned (30 total skill levels)\n' : (skillDiff = 30 - grandpaLine[10]) + (grandpa = grandpa + '+1 possible (30 total skill levels) -- need ' + skillDiff + ' more\n')};

//   	{(grandpaLine[10] >= 50) ? grandpa = grandpa + '+1 more earned (50 total skill levels)\n' : (skillDiff = 50 - grandpaLine[10]) + (grandpa = grandpa + '+1 more possible (50 total skill levels) -- need ' + skillDiff + ' more\n')};

//   	grandpa = grandpa + farmer + ' has ' + grandpaLine[11] + ' relationship(s) of 1975+ friendship points (~8H).\n'

//   	{(grandpaLine[11] >=5) ? grandpa = grandpa + '+1 earned (8H with 5 people)\n' : (friendDiff = 5 - grandpaLine[11]) + (grandpa = grandpa + '+1 possible (8H with 5 people) -- need ' + friendDiff + ' more\n')};
 
//   	{(grandpaLine[11] >=10) ? grandpa = grandpa + '+1 earned (8H with 10 people)\n' : (friendDiff = 10 - grandpaLine[11]) + (grandpa = grandpa + '+1 possible (8H with 10 people) -- need ' + friendDiff + ' more\n')};

//   	grandpa = grandpa + farmer + ' has a pet with ' + grandpaLine[12] + ' friendship points\n'

//   	{(grandpaLine[12] >= 999) ? grandpa = grandpa + '+1 possible (pet with at least 999 friendship points)\n' : (petDiff = 999 - grandpaLine[12]) + (grandpa = grandpa + '+1 possible (pet with at least 999 friendship points) -- need ' + petDiff + ' more\n')};

//   	if (grandpaLine[13] == 1) {
//   		grandpa = grandpa + farmer + ' is married and has upgraded the farmhouse ' + grandpaLine[14] + ' time(s)\n'
//   		if (grandpaLine[14] >= 2) {
//   			grandpa = grandpa + '+1 earned (married with at least 2 house upgrades)\n'
//   		} else {
//   			upgradeDiff = 2 - grandpaLine[14]
//   			grandpa = grandpa + '+1 possible (married with at least 2 house upgrades) -- need ' + upgradeDiff + ' more house upgrade(s)\n'
//   		}
//   	} else {
// 		grandpa = grandpa + farmer + ' is not married and has upgraded the farmhouse ' + grandpaLine[14] + ' time(s)\n'  	
// 		if (grandpaLine[14] >= 2) {
// 			grandpa = grandpa + '+1 possible (married with at least 2 house upgrades) -- need a spouse\n'
//   		} else {
//   			upgradeDiff = 2 - grandpaLine[14]
//   			grandpa = grandpa + '+1 possible (married with at least 2 house upgrades) -- need a spouse and ' + upgradeDiff + ' more house upgrade(s)\n'
// 		}	
//   	}

//   	if (grandpaLine[15] == 'true') {
//   		grandpa = grandpa + farmer + ' has acquired the Rusty Key and'
//   		if (grandpaLine[15] == 'true') {
//   			grandpa = grandpa + ' the Skull Key.\n+1 earned (has the Rusty Key)\n+1 earned (has the Skull Key)'
//   		} else {
//   			grandpa = grandpa + ' has not acquired the Skull Key.\n+1 earned (has the Rusty Key)\n+1 possible (has the Skull Key)'
//   		}
//   	} else {
//   		grandpa = grandpa + farmer + ' has not acquired the Rusty Key \n'
//   		if (grandpaLine[15] == 'true') {
//   			grandpa = grandpa + 'and has acquired the Skull Key.\n+1 possible (has the Rusty Key)\n+1 earned (has the Skull Key)'
//   		} else {
//   			grandpa = grandpa + ' nor the Skull Key.\n+1 possible (has the Rusty Key)\n+1 possible (has the Skull Key)'
//   		}
//   	}

//   	return grandpa.split('\n').map(achievement => <li>{achievement}</li>);
//   }