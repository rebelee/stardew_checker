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
import Social5H from './Social5H';
import Social10H from './Social10H';
import FamilyHearts from './FamilyHearts';
import FriendshipHearts from './FriendshipHearts';
import CookingInfo from './CookingInfo';
import CookingLeft from './CookingLeft';
import FishingInfo from './FishingInfo';
import FishingLeft from './FishingLeft';
import QuestInfo from './QuestInfo';
import ShippingInfo from './ShippingInfo';
import BasicLeft from './BasicLeft';
import PolyLeft from './PolyLeft';
import SkillInfo from './SkillInfo';
import SkillLeft from './SkillLeft';
import MineInfo from './MineInfo';
import MonsterInfo from './MonsterInfo';
import MonsterLeft from './MonsterLeft';
import StardropInfo from './StardropInfo';
import SecretInfo from './SecretInfo';
import CenterInfo from './CenterInfo';
import GrandpaInfo from './GrandpaInfo'
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
      cookingLeft: [],
      cookLength: 0,
      fishingLine: [],
      fishingLeft: [],
      fishingLength: 0,
      questLine: [],
      shipLine: [],
      basicLeft: [],
      basicLength: 0,
      polyLeft: [],
      polyLength: 0,
      skillLine: [],
      skillLeft: [],
      skillLength: 0,
      mineLine: [],
      monsterLine: [],
      monsterLeft: [],
      monsterLength: 0,
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
      // formatting info for friendships
      this.setState({friendLine: formatted});

      // formatting info for cooking
      const cookingLine = formatted[129].split(",");
      this.setState({cookingLine: cookingLine});
      const cookingLeft = formatted[130].split(",");
      this.setState({cookingLeft: cookingLeft});
      const cookLength = cookingLeft.length;
      this.setState({cookLength: cookLength});

      // formatting info for fishing
      const fishingLine = formatted[131].split(",");
      this.setState({fishingLine: fishingLine});
      const fishingLeft = formatted[132].split(",");
      this.setState({fishingLeft: fishingLeft});
      const fishingLength = fishingLeft.length;
      this.setState({fishingLength: fishingLength});

      // formatting for quest achievements
      const questLine = formatted[133];
      this.setState({questLine: questLine});

      // formatting for shipping
      const shipLine = formatted[134].split(",");
      this.setState({shipLine: shipLine});
      const basicLeft = formatted[135].split(",");
      this.setState({basicLeft: basicLeft});
      const basicLength = basicLeft.length;
      this.setState({basicLength: basicLength});
      const polyLeft = formatted[136].split(",");
      this.setState({polyLeft: polyLeft});
      const polyLength = polyLeft.length;
      this.setState({polyLength: polyLength});

      // formatting for skills
      const skillLine = formatted[137];
      this.setState({skillLine: skillLine});
      const skillLeft = formatted[138].split(",");
      this.setState({skillLeft: skillLeft});
      const skillLength = skillLeft.length;
      this.setState({skillLength: skillLength});

      // formatting for mine info
      const mineLine = formatted[139].split(",");
      this.setState({mineLine: mineLine});

      // formatting monster info
      const monsterLine = formatted[140].split(",");
      this.setState({monsterLine: monsterLine});
      const monsterLeft = formatted[141].split(",");
      this.setState({monsterLeft: monsterLeft});
      const monsterLength = monsterLeft.length;
      this.setState({monsterLength: monsterLength});

      // formatting stardrop info
      const stardropLine = formatted[142].split(",");
      this.setState({stardropLine: stardropLine});

      // formatting secret notes info
      const secretLine = formatted[143].split(",");
      this.setState({secretLine: secretLine});

      // formatting for center info
      const centerLine = formatted[144].split(",");
      this.setState({centerLine: centerLine});

      // formmating for grandpa info
      const grandpaLine = formatted[145].split(",");
      this.setState({grandpaLine: grandpaLine});

    }.bind(this);

    reader.readAsText(event.target.files[0]);
    // console.log(reader.result);
    this.setState({hasRendered: true});
  }

  handleSubmit(value) {
  	this.setState({menu: value});
  }

  render() {
    const list = this.state.fileContent.map(achievement => <li>{achievement}</li>);
    let minLength
    let artLength

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
          {this.state.hasRendered && this.state.menu == 'general' ? <div className = 'info'><h3>General Info</h3><FirstInfo firstLine={this.state.firstLine} /><br /><FarmInfo farmLine={this.state.farmLine} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'money' ? <div className = 'info'><h3>Money Info</h3><MoneyInfo moneyLine={parseInt(this.state.moneyLine)} farmer={this.state.farmer} /></div> : <p />}
          {this.state.hasRendered && this.state.menu == 'museum' ? <div className = 'info'><h3>Museum Info</h3><MuseumInfo museumLine={this.state.museumLine} farmer= {this.state.farmer} /><br /><MineralArtifacts minartLine={this.state.minartLine} farmer={this.state.farmer} /><br />{this.state.minToDonate[0] !== 'none' && <MinToDonate minToDonate={this.state.minToDonate} length={this.state.minLength} />}<br />{this.state.artToDonate !== 'none' && <ArtToDonate artToDonate={this.state.artToDonate} length={this.state.artLength} />}</div> : <p />}
          {this.state.hasRendered && this.state.menu == 'home' ? <div className = 'info'><h3>Home Info</h3><HomeInfo homeLine={this.state.homeLine} farmer={this.state.farmer} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'social' ? <div className = 'info'><h3>Social Info</h3><Social5H fiveHeartLine={this.state.fiveHeartLine} farmer={this.state.farmer} /><br /><Social10H tenHeartLine={this.state.tenHeartLine} farmer={this.state.farmer} /></div> : <p />}
          {this.state.hasRendered && this.state.menu == 'family' ? <div className = 'info'><h3>Family Hearts Info</h3><FamilyHearts childHearts={this.state.childHearts} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'friendship' ? <div className = 'info'><h3>Friendship Hearts Info</h3><FriendshipHearts friendLine={this.state.friendLine} /></div> : <p />}
          {this.state.hasRendered && this.state.menu == 'cooking' ? <div className = 'info'> <h3>Cooking Info</h3><CookingInfo cookingLine={this.state.cookingLine} farmer={this.state.farmer} /><br />{this.state.cookingLeft[0] !== 'none' && <CookingLeft cookingLeft={this.state.cookingLeft} length={this.state.cookLength}/>}</div>: <p />}
          {this.state.hasRendered && this.state.menu == 'fishing' ? <div className = 'info'><h3>Fishing Info</h3><FishingInfo fishingLine={this.state.fishingLine} farmer={this.state.farmer} /><br />{this.state.fishingLeft[0] !== 'none' && <FishingLeft fishingLeft={this.state.fishingLeft} length={this.state.fishingLength} />}</div>: <p />}
          {this.state.hasRendered && this.state.menu == 'quest' ? <div className = 'info'><h3>Quest Info</h3><QuestInfo questLine={this.state.questLine} farmer={this.state.farmer} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'shipping' ? <div className = 'info'><h3>Shipping Info</h3><ShippingInfo shipLine={this.state.shipLine} farmer={this.state.farmer} /><br />{this.state.basicLeft[0] !== 'none' && <BasicLeft basicLeft={this.state.basicLeft} length={this.state.basicLength} />}<br />{this.state.polyLeft[0] !=='none' && <PolyLeft polyLeft={this.state.polyLeft} length={this.state.polyLength} />}</div>: <p />}
          {this.state.hasRendered && this.state.menu == 'skill' ? <div className = 'info'><h3>Skill Info</h3><SkillInfo skillLine={this.state.skillLine} farmer={this.state.farmer} /><br/>{this.state.skillLeft[0] !== 'none' && <SkillLeft skillLeft={this.state.skillLeft} length={this.state.skillLength} />}</div>: <p />}
          {this.state.hasRendered && this.state.menu == 'mine' ? <div className = 'info'><h3>Mine Info</h3><MineInfo mineLine={this.state.mineLine} farmer={this.state.farmer} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'monster' ? <div className = 'info'><h3>Monster Info</h3><MonsterInfo monsterLine={this.state.monsterLine} farmer={this.state.farmer} /><br />{this.state.monsterLeft[0] !== 'none' && <MonsterLeft monsterLeft={this.state.monsterLeft} length={this.state.monsterLength} />}</div>: <p />}
          {this.state.hasRendered && this.state.menu == 'stardrop' ? <div className = 'info'><h3>Stardrop Info</h3><StardropInfo stardropLine={this.state.stardropLine} farmer={this.state.farmer} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'secret' ? <div className = 'info'><h3>Secret Info</h3><SecretInfo secretLine={this.state.secretLine} farmer={this.state.farmer} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'center' ? <div className = 'info'><h3>Center Info</h3><CenterInfo centerLine={this.state.centerLine} farmer={this.state.farmer} /></div>: <p />}
          {this.state.hasRendered && this.state.menu == 'grandpa' ? <div className = 'info'><h3>Grandpa Info</h3><GrandpaInfo grandpaLine={this.state.grandpaLine} farmer={this.state.farmer} /></div>: <p />}
        </div>
      </div>
    );
  }
}

export default App;
