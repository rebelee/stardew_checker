import React, { Component } from 'react';

class StardewSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 'general'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state.value);
	}

	render() {

		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick what you are interested in: 
					<select value ={this.state.value} onChange={this.handleChange}>
						<option value = "general">General Info</option>
						<option value = "money">Money</option>
						<option value = "museum">Museum</option>
						<option value = "home">Home</option>
						<option value = "social">Social</option>
						<option value = "family">Family Hearts</option>
						<option value = "friendship">Friendship Hearts</option>
						<option value = "cooking">Cooking</option>
						<option value = "fishing">Fishing</option>
						<option value = "quest">Quest</option>
						<option value = "shipping">Shipping</option>
						<option value = "skill">Skill</option>
						<option value = "mine">Mine</option>
						<option value = "monster">Monster</option>
						<option value = "stardrop">Stardrop</option>
						<option value = "secret">Secret</option>
						<option value = "center">Center</option>
						<option value = "grandpa">Grandpa</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default StardewSelect;