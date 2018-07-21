import React, { Component } from 'react';
import StardewSelect from './StardewSelect';
import FirstInfo from './FirstInfo';
import FarmInfo from './FarmInfo';
import MoneyInfo from './MoneyInfo';
import MuseumInfo from './MuseumInfo';
import MineralArtifacts from './MineralArtifacts';
import MinToDonate from './MinToDonate';
import ArtToDonate from './ArtToDonate';
import HomeInfo from './HomeInfo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fileContent: [],
      firstLine: [],
      farmer: [],
      farmLine: [],
      moneyLine: [],
      museumLine: [],
      minartLine: [],
      minToDonate: [],
      minLength: 0,
      artToDonate: [],
      artLength: 0,
      homeLine: [],
      fiveHeartLine: [],
      tenHeartLine: [],
      childHearts: [],
      friendLine: [],
      cookingLine: [],
      fishingLine: [],
      questLine: [],
      shipLine: [],
      skillLine: [],
      mineLine: [],
      monsterLine: [],
      stardropLine: [],
      secretLine:[],
      centerLine: [],
      grandpaLine: [],
      hasRendered: false,
      menu: ''
    }
  }

  handleChange(event) {
    console.log(event.target.files[0].name);

    const fileName = event.target.files[0].name;
    const reader = new FileReader();

    reader.onload = function(e) {
      // format the whole file
      const formatted = e.target.result.split("\n");
      this.setState({fileContent: formatted});

      // formatting for variables for the summary for player
      const firstLine = formatted[0].split(",");
      this.setState({firstLine: firstLine});
      const farmer = firstLine[0];
      this.setState({farmer: farmer});
      const farmLine = formatted[1].split(",");
      this.setState({farmLine: farmLine});

      // formatting for money
      const moneyLine = formatted[2];
      this.setState({moneyLine: moneyLine});

      // formatting for museum and achievements
      const museumLine = formatted[3];
      this.setState({museumLine: museumLine});
      const minartLine = formatted[4].split(",");
      this.setState({minartLine: minartLine});
      const minToDonate = formatted[5].split(",");
      this.setState({minToDonate: minToDonate});
      const minLength = minToDonate.length;
      this.setState({minLength: minLength});
      const artToDonate = formatted[6].split(",");
      this.setState({artToDonate: artToDonate});
      const artLength = artToDonate.length;
      this.setState({artLength: artLength});

      // formatting for info about family
      const homeLine = formatted[7].split(",");
      this.setState({homeLine: homeLine});

      // formatting info about social achievements
      const fiveHeartLine = formatted[8];
      this.setState({fiveHeartLine: fiveHeartLine});
      const tenHeartLine = formatted[9];
      this.setState({tenHeartLine: tenHeartLine});
      // formatting info for children
      const childHearts = formatted[10].split(";");
      this.setState({childHearts: childHearts});

      this.setState({friendLine: formatted});

      const cookingLine = formatted[129].split(",");
      this.setState({cookingLine: cookingLine});

      const fishingLine = formatted[130].split(",");
      this.setState({fishingLine: fishingLine});

      const questLine = formatted[131];
      this.setState({questLine: questLine});

      const shipLine = formatted[132].split(",");
      this.setState({shipLine: shipLine});

      const skillLine = formatted[133];
      this.setState({skillLine: skillLine});

      const mineLine = formatted[134].split(",");
      this.setState({mineLine: mineLine});

      const monsterLine = formatted[135].split(",");
      this.setState({monsterLine: monsterLine});

      const stardropLine = formatted[136].split(",");
      this.setState({stardropLine: stardropLine});

      const secretLine = formatted[137].split(",");
      this.setState({secretLine: secretLine});

      const centerLine = formatted[138].split(",");
      this.setState({centerLine: centerLine});

      const grandpaLine = formatted[139].split(",");
      this.setState({grandpaLine: grandpaLine});

    }.bind(this);

    reader.readAsText(event.target.files[0]);
    // console.log(reader.result);
    this.setState({hasRendered: true});
  }

  handleSubmit(value) {
  	this.setState({menu: value});
  }

  formatFiveHeartAchieve(farmer, fiveHeartLine) {
  	let fiveHeart
  	let fiveHeartDiff

  	fiveHeart = farmer + ' has ' + fiveHeartLine + ' relationship(s) of 5+ hearts.\n'

  	{(fiveHeartLine >=1) ? fiveHeart = fiveHeart + 'A New Friend (5H with 1 person) done\n' : (fiveHeartDiff = 1) + (fiveHeart = fiveHeart + 'A New Friend (5H with 1 person) -- need ' + fiveHeartDiff + ' more friends\n')};

  	{(fiveHeartLine >=4) ? fiveHeart = fiveHeart + 'Cliques (5H with 4 people) done\n' : (fiveHeartDiff = 4 - fiveHeart) + (fiveHeart = fiveHeart + 'Cliques (5H with 4 people) -- need ' + fiveHeartDiff + ' more friends\n')};

  	{(fiveHeartLine >=10) ? fiveHeart = fiveHeart + 'Networking (5H with 10 people) done\n' : (fiveHeartDiff = 10 - fiveHeart) + (fiveHeart = fiveHeart + 'Networking (5H with 10 people) -- need ' + fiveHeartDiff + ' more friends\n')};

  	{(fiveHeartLine >=20) ? fiveHeart = fiveHeart + 'Popular (5H with 20 people) done' : (fiveHeartDiff = 20 - fiveHeart) + (fiveHeart = fiveHeart + 'Popular (5H with 20 people) -- need ' + fiveHeartDiff + ' more friends')};

  	return fiveHeart.split('\n').map(achievement => <li>{achievement}</li>);

  }

  formatTenHeartAchieve(farmer, tenHeartLine) {
  	let tenHeart
  	let tenHeartDiff

  	tenHeart = farmer + ' has ' + tenHeartLine + ' relationship(s) of 10+ hearts.\n'

  	{(tenHeartLine >=1) ? tenHeart = tenHeart + 'Best Friends (10H with 1 person) done\n' : (tenHeartDiff = 1) + (tenHeart = tenHeart + 'Best Friends (10H with 1 person) -- need ' + tenHeartDiff + ' more friends\n')};

  	{(tenHeartLine >=8) ? tenHeart = tenHeart + 'The Beloved Farmer (10H with 8 people) done' : (tenHeartDiff = 8 - tenHeart) + (tenHeart = tenHeart + 'The Beloved Farmer (10H with 8 people) -- need ' + tenHeartDiff + ' more friends')};

  	return tenHeart.split('\n').map(achievement => <li>{achievement}</li>);

  }

  formatCookingAchieve(farmer, cookingLine) {
  	let cooking
  	let cookDiff

  	cooking = farmer + ' knows ' + cookingLine[0] + ' recipes and has cooked ' + cookingLine[1] + ' of 71 recipes\n'

  	{(cookingLine[1] >= 10) ? cooking = cooking + 'Cook (cook 10 different recipes) done\n' : (cookDiff = 10 - cookingLine[1]) + (cooking = cooking + 'Cook (cook 10 different recipes) -- need ' + cookDiff + ' more recipes\n')};

  	{(cookingLine[1] >= 25) ? cooking = cooking + 'Sous Chef (cook 25 different recipes) done\n' : (cookDiff = 25 - cookingLine[1]) + (cooking = cooking + 'Sous Chef (cook 25 different recipes) -- need ' + cookDiff + ' more recipes\n')};

  	{(cookingLine[1] == 71) ? cooking = cooking + 'Gourmet Chef (cook every recipe) done' : (cookDiff = 71 - cookingLine[1]) + (cooking = cooking + 'Gourmet Chef (cook every recipe) -- need ' + cookDiff + ' more recipes')};

  	return cooking.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatFishingAchieve(farmer, fishingLine) {
  	let fishing
  	let fishDiff

  	fishing = farmer + ' has caught ' + fishingLine[1] + ' of 62 different fish (' + fishingLine[0] + ' total)\n'

  	{(fishingLine[0] >= 100) ? fishing = fishing + 'Mother Catch (catch 100 total fish) done\n' : (fishDiff = 100 - fishingLine[0]) + (fishing  = fishing + 'Mother Catch (catch 100 total fish) -- need ' + fishDiff + ' more fish\n')};

  	{(fishingLine[1] >= 10) ? fishing = fishing + 'Fisherman (catch 10 different fish) done\n' : (fishDiff = 10 - fishingLine[1]) + (fishing  = fishing + 'Fisherman (catch 10 different fish) -- need ' + fishDiff + ' more fish\n')};

  	{(fishingLine[1] >= 24) ? fishing = fishing + "Ol' Mariner (catch 24 different fish) done\n" : (fishDiff = 24 - fishingLine[1]) + (fishing  = fishing + "Ol' Mariner (catch 24 different fish) -- need " + fishDiff + ' more fish\n')};

  	{(fishingLine[1] >= 59) ? fishing = fishing + "Master Angler (catch 59 different fish) done\n" : (fishDiff = 59 - fishingLine[1]) + (fishing  = fishing + "Master Angler (catch 59 different fish) -- need " + fishDiff + ' more fish\n')};

  	{(fishingLine[1] >= 62) ? fishing = fishing + "Catch every type of fish done" : (fishDiff = 62 - fishingLine[1]) + (fishing  = fishing + "Catch every type of fish -- need " + fishDiff + ' more fish')};

  	return fishing.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatQuestAchieve(farmer, questLine) {
  	let quest
  	let questDiff

  	quest = farmer + ' has completed ' + questLine + " 'Help Wanted' quest(s)\n"

  	{(questLine >= 10) ? quest = quest + 'Gofer (complete 10 quests) done\n' : (questDiff = 10 - questLine) + (quest = quest + 'Gofer (complete 10 quests) -- need ' + questDiff + ' more quests\n')};

  	{(questLine >= 40) ? quest = quest + 'A Big Help (complete 40 quests) done' : (questDiff = 40 - questLine) + (quest = quest + 'A Big Help (complete 40 quests) -- need ' + questDiff + ' more quests')};

  	return quest.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatShipAchieve(farmer, shipLine) {
  	let ship
  	let shipDiff

  	ship = farmer + ' has shipped ' + shipLine[0] + ' of 126 basic items\n'

  	{(shipLine[0] == 126) ? ship = ship + 'Full Shipment (ship every item) done\n' : (shipDiff = 126 - shipLine[0]) + (ship = ship + 'Full Shipment (ship every item) -- need ' + shipDiff + ' more\n')};

  	ship = ship + farmer + ' has shipped ' + shipLine[1] + ' the most (' + shipLine[2] + ')\n'

  	{(shipLine[2] >= 300) ? ship = ship + 'Monoculture (ship 300 of one crop) done\n' : (shipDiff = 300 - shipLine[2]) + (ship = ship + 'Monoculture (ship 300 of one crop) -- need ' + shipDiff + ' more\n')};

  	ship = ship + farmer + ' has shipped 15 items from ' + shipLine[3] + ' of 28 different crops\n'

  	{(shipLine[3] == 28) ? ship = ship + 'Polyculture (ship 15 of each crop) done' : (shipDiff = 28 - shipLine[3]) + (ship = ship + 'Polyculture (ship 15 of each crop) -- need ' + shipDiff + ' more')};

  	return ship.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatSkillAchieve(farmer, skillLine) {
  	let skill 
  	let skillDiff

  	skill = farmer + ' has reached level 10 in ' + skillLine + ' of 5 skills\n'

  	{(skillLine >= 1) ? skill = skill + 'Singular Talent (level 10 in a skill) done\n' : (skillDiff = 1) + (skill = skill + 'Singular Talent (level 10 in a skill) -- need )' + skillDiff + ' more\n')};

  	{(skillLine >= 5) ? skill = skill + 'Master of the Five Ways (level 10 in every skill) done' : (skillDiff = 5 - skillLine) + (skill = skill + 'Master of the Five Ways (level 10 in every skill) -- need )' + skillDiff + ' more')};

  	return skill.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatMineAchieve(farmer, mineLine) {
  	let mine 
  	let mineDiff

  	mine = farmer + ' has reached level ' + mineLine[1] + ' of the mines\n'

  	{(mineLine[1] == 120) ? mine = mine + 'The Bottom (reach mine level 120) done\n' : (mineDiff = 120 - mineLine[1]) + (mine = mine + 'The Bottom (reach mine level 120) -- need ' + mineDiff + ' more levels\n')};

  	mine = mine + farmer + ' has reached level ' + (mineLine[0] - mineLine[1]) + ' of the Skull Cavern'

  	return mine.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatMonsterAchieve(farmer, monsterLine) {
  	let monster
  	let monsterDiff

  	monster = farmer + ' has killed a total of ' + monsterLine[0] + ' monsters\n' + farmer + ' has completed ' + monsterLine[1] + ' of 7 Monster Eradication goals.\n'

  	{(monsterLine[1] == 7) ? monster = monster + 'Protector of the Valley (all monster goals) done' : (monsterDiff = 7 - monsterLine[1]) + (monster = monster + 'Protector of the Valley (all monster goals) -- need ' + monsterDiff + ' more')};

  	return monster.split('\n').map(achievement => <li>{achievement}</li>);

  }

  formatStardropAchieve(farmer, stardropLine) {
  	let stardrop
  	let starDiff

  	stardrop = farmer + ' has received ' + stardropLine[0] + ' of 7 stardrops\n'

  	{(stardropLine[0] == 7) ? stardrop = stardrop + 'Mystery of the Stardrops (find every stardrop) done' : (starDiff = 7 - stardropLine[0]) + (stardrop = stardrop + 'Mystery of the Stardrops (find every stardrop) -- need ' + starDiff + ' more\nStardrops left:\n' + stardropLine[1])};

  	return stardrop.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatSecret(farmer, secretLine) {
  	let secret
  	let secretLength

  	secretLength = secretLine.length;

  	secret = farmer + ' ' + secretLine[0] + ' seen Krobus at the Bus Stop\n,' 

  	{(secretLine[1]) ? secret = secret + farmer + ' has found the Magnifying Glass\n,' : secret = secret + farmer + ' has not found the Magnifying Glass\n,'};

  	secret = secret + farmer + ' has read ' + secretLine[2] + ' of 23 secret notes\n,Left to read:\n,' + secretLine.slice(3, (secretLength))

  	return secret.split(',').map(achievement => <li>{achievement}</li>);
  }

  formatCenterAchieve(farmer, centerLine) {
  	let center 
  	let centerDiff

  	if (centerLine[0]=='TRUE') {
  		center = farmer + ' is a Joja member and cannot complete the Community Center bundles\n'

  		if (centerLine[1]=='TRUE') {
  			center = center + farmer + ' has attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) done\nLocal Legend IMPOSSIBLE'
  		} else {
  			if (centerLine[3] == 5) {
  				center = center + farmer + ' has not attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) done\nLocal Legend IMPOSSIBLE'
  			} else {
  				centerDiff = 5 - centerLine[3]
  				center = center + farmer + ' has not attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) -- need' + centerDiff + ' more\nLocal Legend IMPOSSIBLE'
  			}
  		}
  	} else {
  		center = farmer + ' is not a Joja member and has completed ' + centerLine[3] + ' of the 6 Community Center Rooms\n'

  		if (centerLine[2]=='TRUE') {
  			center = center + farmer + ' has attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) IMPOSSIBLE\nLocal Legend done'
  		} else {
  			if (centerLine[3] == 6) {
  			center = center + farmer + ' has not attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) IMPOSSIBLE\nLocal Legend done'  				
  			} else {
  				centerDiff = 6 - centerLine[3]
  				center = center + farmer + ' has not attended the completion ceremony\nJoja Co. Member Of The Year (become a Joja member and purchase all community development perks) IMPOSSIBLE\nLocal Legend -- need' + centerDiff + ' more'

  			}
  		}
  	}

  	return center.split('\n').map(achievement => <li>{achievement}</li>);
  }

  formatGrandpa(farmer, grandpaLine) {
  	let grandpa
  	let candleDiff
  	let moneyDiff
  	let skillDiff
  	let friendDiff
  	let petDiff
  	let upgradeDiff
  	let prettyMoney

  	grandpa = farmer + ' has earned a total of ' + grandpaLine[0] + ' point(s) (details below); the maximum possible is 21 points\n'

  	grandpa = grandpa + 'The shrine has ' + grandpaLine[1] + ' candle(s) lit. The next evaluation will light ' + grandpaLine[2] + ' candle(s).\n'

  	{(grandpaLine[2] >= 4) ? grandpa = grandpa + 'Four candle evaluation done\n' : (candleDiff = 4 - grandpaLine[2]) + (grandpa = grandpa + 'Four candle evaluation -- need ' + candleDiff + ' more candle(s)\n')};


  	prettyMoney = parseInt(grandpaLine[3])
  	prettyMoney = prettyMoney.toLocaleString()

  	grandpa = grandpa + farmer + ' has earned a total of ' + prettyMoney + 'g.\n'

  	{(grandpaLine[3] >= 5e4) ? grandpa = grandpa + '+1 earned (at least 50,000g earnings) done\n' : (moneyDiff = 5e4 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 50,000g earnings) -- need ' + moneyDiff + 'g more\n')};

  	{(grandpaLine[3] >= 1e5) ? grandpa = grandpa + '+1 earned (at least 100,000g earnings) done\n' : (moneyDiff = 1e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 100,000g earnings) -- need ' + moneyDiff + 'g more\n')};

  	{(grandpaLine[3] >= 2e5) ? grandpa = grandpa + '+1 earned (at least 200,000g earnings) done\n' : (moneyDiff = 2e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 200,000g earnings) -- need ' + moneyDiff + 'g more\n')};

  	{(grandpaLine[3] >= 3e5) ? grandpa = grandpa + '+1 earned (at least 300,000g earnings) done\n' : (moneyDiff = 3e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 300,000g earnings) -- need ' + moneyDiff + 'g more\n')};

  	{(grandpaLine[3] >= 5e5) ? grandpa = grandpa + '+1 earned (at least 500,000g earnings) done\n' : (moneyDiff = 5e5 - grandpaLine[3]) + (grandpa = grandpa + '+1 possible (at least 500,000g earnings) -- need ' + moneyDiff + 'g more\n')};

  	{(grandpaLine[3] >= 1e6) ? grandpa = grandpa + '+2 earned (at least 1,000,000g earnings) done\n' : (moneyDiff = 1e6 - grandpaLine[3]) + (grandpa = grandpa + '+2 possible (at least 1,000,000g earnings) -- need ' + moneyDiff + 'g more\n')};

  	grandpa = grandpa + farmer + ' has earend ' + grandpaLine[4] + ' of 3 relevant achievements.\n'

  	{(grandpaLine[5]=='TRUE') ? grandpa = grandpa + '+1 done (A Complete Collection Achievement)\n' : grandpa = grandpa + '+1 possible (A Complete Collection Achievement)\n'}

  	{(grandpaLine[6]=='TRUE') ? grandpa = grandpa + '+1 done (Master Angler Achievement)\n' : grandpa = grandpa + '+1 possible (Master Angler Achievement)\n'}

  	{(grandpaLine[7]=='TRUE') ? grandpa = grandpa + '+1 done (Full Shipment Achievement)\n' : grandpa = grandpa + '+1 possible (Full Shipment Achievement)\n'}

  	if (grandpaLine[8]=='TRUE') {
  		grandpa = grandpa + farmer + ' has completed the Community Center restoration and attended the re-opening ceremony.\n+1 earned (complete Community Center)\n+2 earned (attend the Community Center re-opening)\n'
  	} else if (grandpaLine[9]==6) {
   		grandpa = grandpa + farmer + ' has completed the Community Center restoration and has not attended the re-opening ceremony.\n+1 earned (complete Community Center)\n+2 possible (attend the Community Center re-opening)\n'	
  	} else {
   		grandpa = grandpa + farmer + ' has not completed the Community Center restoration and has not attended the re-opening ceremony.\n+1 possible (complete Community Center)\n+2 possible (attend the Community Center re-opening)\n'	
  	}

  	grandpa = grandpa + ' has ' + grandpaLine[10] + ' total skill levels\n'

  	{(grandpaLine[10] >= 30) ? grandpa = grandpa + '+1 earned (30 total skill levels)\n' : (skillDiff = 30 - grandpaLine[10]) + (grandpa = grandpa + '+1 possible (30 total skill levels) -- need ' + skillDiff + ' more\n')};

  	{(grandpaLine[10] >= 50) ? grandpa = grandpa + '+1 more earned (50 total skill levels)\n' : (skillDiff = 50 - grandpaLine[10]) + (grandpa = grandpa + '+1 more possible (50 total skill levels) -- need ' + skillDiff + ' more\n')};

  	grandpa = grandpa + farmer + ' has ' + grandpaLine[11] + ' relationship(s) of 1975+ friendship points (~8H).\n'

  	{(grandpaLine[11] >=5) ? grandpa = grandpa + '+1 earned (8H with 5 people)\n' : (friendDiff = 5 - grandpaLine[11]) + (grandpa = grandpa + '+1 possible (8H with 5 people) -- need ' + friendDiff + ' more\n')};
 
  	{(grandpaLine[11] >=10) ? grandpa = grandpa + '+1 earned (8H with 10 people)\n' : (friendDiff = 10 - grandpaLine[11]) + (grandpa = grandpa + '+1 possible (8H with 10 people) -- need ' + friendDiff + ' more\n')};

  	grandpa = grandpa + farmer + ' has a pet with ' + grandpaLine[12] + ' friendship points\n'

  	{(grandpaLine[12] >= 999) ? grandpa = grandpa + '+1 possible (pet with at least 999 friendship points)\n' : (petDiff = 999 - grandpaLine[12]) + (grandpa = grandpa + '+1 possible (pet with at least 999 friendship points) -- need ' + petDiff + ' more\n')};

  	if (grandpaLine[13] == 1) {
  		grandpa = grandpa + farmer + ' is married and has upgraded the farmhouse ' + grandpaLine[14] + ' time(s)\n'
  		if (grandpaLine[14] >= 2) {
  			grandpa = grandpa + '+1 earned (married with at least 2 house upgrades)\n'
  		} else {
  			upgradeDiff = 2 - grandpaLine[14]
  			grandpa = grandpa + '+1 possible (married with at least 2 house upgrades) -- need ' + upgradeDiff + ' more house upgrade(s)\n'
  		}
  	} else {
		grandpa = grandpa + farmer + ' is not married and has upgraded the farmhouse ' + grandpaLine[14] + ' time(s)\n'  	
		if (grandpaLine[14] >= 2) {
			grandpa = grandpa + '+1 possible (married with at least 2 house upgrades) -- need a spouse\n'
  		} else {
  			upgradeDiff = 2 - grandpaLine[14]
  			grandpa = grandpa + '+1 possible (married with at least 2 house upgrades) -- need a spouse and ' + upgradeDiff + ' more house upgrade(s)\n'
		}	
  	}

  	if (grandpaLine[15] == 'true') {
  		grandpa = grandpa + farmer + ' has acquired the Rusty Key and'
  		if (grandpaLine[15] == 'true') {
  			grandpa = grandpa + ' the Skull Key.\n+1 earned (has the Rusty Key)\n+1 earned (has the Skull Key)'
  		} else {
  			grandpa = grandpa + ' has not acquired the Skull Key.\n+1 earned (has the Rusty Key)\n+1 possible (has the Skull Key)'
  		}
  	} else {
  		grandpa = grandpa + farmer + ' has not acquired the Rusty Key \n'
  		if (grandpaLine[15] == 'true') {
  			grandpa = grandpa + 'and has acquired the Skull Key.\n+1 possible (has the Rusty Key)\n+1 earned (has the Skull Key)'
  		} else {
  			grandpa = grandpa + ' nor the Skull Key.\n+1 possible (has the Rusty Key)\n+1 possible (has the Skull Key)'
  		}
  	}

  	return grandpa.split('\n').map(achievement => <li>{achievement}</li>);
  }

  render() {
    const list = this.state.fileContent.map(achievement => <li>{achievement}</li>);
    let minLength
    let artLength

    let fiveHeartInfo
    let tenHeartInfo
    let cookingInfo
    let fishingInfo
    let questInfo
    let shipInfo
    let skillInfo
    let mineInfo
    let monsterInfo
    let stardropInfo
    let secretInfo
    let centerInfo
    let grandpaInfo

    if (this.state.hasRendered == true) {
    	fiveHeartInfo = this.formatFiveHeartAchieve(this.state.farmer, this.state.fiveHeartLine);
    	tenHeartInfo = this.formatTenHeartAchieve(this.state.farmer, this.state.tenHeartLine);
    	cookingInfo = this.formatCookingAchieve(this.state.farmer, this.state.cookingLine);
    	fishingInfo = this.formatFishingAchieve(this.state.farmer, this.state.fishingLine);
    	questInfo = this.formatQuestAchieve(this.state.farmer, this.state.questLine);
    	shipInfo = this.formatShipAchieve(this.state.farmer, this.state.shipLine);
    	skillInfo = this.formatSkillAchieve(this.state.farmer, this.state.skillLine);
    	mineInfo = this.formatMineAchieve(this.state.farmer, this.state.mineLine);
    	monsterInfo = this.formatMonsterAchieve(this.state.farmer, this.state.monsterLine);
    	stardropInfo = this.formatStardropAchieve(this.state.farmer, this.state.stardropLine);
    	secretInfo = this.formatSecret(this.state.farmer, this.state.secretLine);
    	centerInfo = this.formatCenterAchieve(this.state.farmer, this.state.centerLine);
    	grandpaInfo = this.formatGrandpa(this.state.farmer, this.state.grandpaLine);
    }

    const childInfo = this.state.childHearts.map(achievement => <li>{achievement}</li>);
    const friendInfo = (this.state.friendLine.slice(22, 140)).map(achievement => <li>{achievement}</li>);

    return (
      <div>
        <div id="page-wrapper">
          <h1>Text File Reader</h1>
          <div className = 'test'>
            Select a text file: 
            <input type="file" id="fileInput" onChange={this.handleChange} />
          </div>
          <StardewSelect onSubmit={this.handleSubmit} />
          <pre id="fileDisplayArea" /><pre />
          {this.state.hasRendered && this.state.menu == 'general' ? <div className = 'info'><h3>General Info</h3> <FirstInfo firstLine={this.state.firstLine} /><FarmInfo farmLine={this.state.farmLine} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'money' ? <div className = 'info'><h3>Money Info</h3> <MoneyInfo moneyLine={parseInt(this.state.moneyLine)} farmer={this.state.farmer} /></div> : <p />}
          {this.state.hasRendered && this.state.menu == 'museum' ? <div className = 'info'><h3>Museum Info</h3> <MuseumInfo museumLine={this.state.museumLine} farmer= {this.state.farmer} /><MineralArtifacts minartLine={this.state.minartLine} farmer={this.state.farmer} />{this.state.minLength > 0 && <MinToDonate minToDonate={this.state.minToDonate} length={this.state.minLength} />}{this.state.artLength > 0 && <ArtToDonate artToDonate={this.state.artToDonate} length={this.state.artLength} />}</div> : <p />}
          {this.state.hasRendered && this.state.menu == 'home' ? <div className = 'info'><h3>Home Info</h3> <HomeInfo homeLine={this.state.homeLine} farmer={this.state.farmer} /></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'social' ? <div> <p>Social Info</p> <ul>{fiveHeartInfo}{tenHeartInfo}</ul></div> : <p />}
          
          {this.state.hasRendered && this.state.menu == 'family' ? <div> <p>Family Hearts Info</p> <ul>{childInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'friendship' ? <div> <p>Friendship Hearts Info</p> <ul>{childInfo}</ul><br /><ul>{friendInfo}</ul></div> : <p />}
          
          {this.state.hasRendered && this.state.menu == 'cooking' ? <div> <p>Cooking Info</p> <ul>{cookingInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'fishing' ? <div> <p>Fishing Info</p> <ul>{fishingInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'quest' ? <div> <p>Quest Info</p> <ul>{questInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'shipping' ? <div> <p>Shipping Info</p> <ul>{shipInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'skill' ? <div> <p>Skill Info</p> <ul>{skillInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'mine' ? <div> <p>Mine Info</p> <ul>{mineInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'monster' ? <div> <p>Monster Info</p> <ul>{monsterInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'stardrop' ? <div> <p>Stardrop Info</p> <ul>{stardropInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'secret' ? <div> <p>Secret Info</p> <ul>{secretInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'center' ? <div> <p>Center Info</p> <ul>{centerInfo}</ul></div>: <p />}
          
          {this.state.hasRendered && this.state.menu == 'grandpa' ? <div><p>Grandpa Info</p> <ul>{grandpaInfo}</ul></div>: <p />}
        </div>
      </div>
    );
  }
}

export default App;
