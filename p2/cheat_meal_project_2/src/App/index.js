import React, { Component } from "react";
import "./style.css";
import Title from '../Title'
import ViewScreen from  '../ViewScreen'
import RestInfo from '../RestInfo'
import testData from '../testData.js'
import axios from 'axios'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: 'Cheat Meal',
			calories: [],
			fat: [],
			protein: [],
			carbs: []
		}
	}



  render() {
  	
  
    return (
    	<div className="App">
    		<Title className='title' title={this.state.title} />
    		<ViewScreen className='view-screen' />
    		<RestInfo className='rest-info' />
   		</div>
    )
  }
}

export default App;
