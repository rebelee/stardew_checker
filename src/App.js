import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fileContent: [],
      // for summary
      farmer: '',
      farm: '',
      pet: '',
      favThing: '',
      firstLine: [],
      farmLine: [],
      hasRendered: false
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
      const farm = firstLine[1];
      this.setState({farm: farm});
      const pet = firstLine[2];
      this.setState({pet: pet});
      const favThing = firstLine[3];
      this.setState({favThing: favThing});
      // formatting summary for farm
      const farmLine = formatted[1].split(",");
      this.setState({farmLine: farmLine});

    }.bind(this);

    reader.readAsText(event.target.files[0]);
    // console.log(reader.result);
    this.setState({hasRendered: true});
  }

  render() {
    const list = this.state.fileContent.map(achievement => <li>{achievement}</li>);
    const first = this.state.firstLine.map(function(first, i) { 
      
      let prefix;
      if (i==0) {
        prefix = 'Farmer name: ' + first 
      } else if (i==1) {
        prefix = 'Farm name: ' + first
      } else if (i==2) {
        prefix = 'Pet type: ' + first
      } else {
        prefix = 'Favorite thing: ' + first
      }

      return <li>{prefix}</li>
    });

    const farmer = this.state.farmer;
    const farm = this.state.farm;
    const pet = this.state.pet;
    const favThing = this.state.favThing;

    const farmInfo = this.state.farmLine.map(function(farmInfo, i) {

      let pre;
      if (i==0) {
        pre = 'Farm type: ' + farmInfo
      } else if (i==1) {
        pre = 'Day: ' + farmInfo
      } else if (i==2) {
        pre = 'Season: ' + farmInfo
      } else {
        pre = 'Year: ' + farmInfo
      }

      return <li>{pre}</li>
    });

    return (
      <div>
        <div id="page-wrapper">
          <h1>Text File Reader</h1>
          <div>
            Select a text file: 
            <input type="file" id="fileInput" onChange={this.handleChange} />
          </div>
          <pre id="fileDisplayArea" /><pre />
          {this.state.hasRendered ? <p>General Info</p> : <p />}
          
          <ul>
          {first}
          {farmInfo}
          </ul>
          <br /> 
        </div>
      </div>
    );
  }
}

export default App;



// window.onload = function() {
//     var fileInput = document.getElementById('fileInput');
//     var fileDisplayArea = document.getElementById('fileDisplayArea');

//     fileInput.addEventListener('change', function(e) {
//       var file = fileInput.files[0];
//       var textType = /text.*/;

//       if (file.type.match(textType)) {
//         var reader = new FileReader();

//         reader.onload = function(e) {
//           fileDisplayArea.innerText = reader.result;
//         }

//         reader.readAsText(file);  
//       } else {
//         fileDisplayArea.innerText = "File not supported!"
//       }
//     });
// }
