import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PagedrawButton from './pagedraw/button';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textInput:"Hello There!!",
			text2:"Push"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
	}
	render() {
        return <PagedrawButton text2={this.state.text2} 
		textInput={this.state.textInput}
		//setText={this.setText.bind(this)}
		handleClick={this.handleClick.bind(this)}
		handleChange={this.handleChange.bind(this)}
		/>
	}
	handleClick(textL) {
	alert("Change!");
		this.setState({textInput:textL});
		this.setState({text2:"Push"});
	}
	handleChange() {
	   alert("Change in text!");
		this.setState({text2:"change"});
	}
}

export default App;
