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
			calories: null,
			fat: null,
			protein: null,
			carbs: null,
		}
		
	}

	handleInput =(evt)=> {
		this.setState({
			title: evt.target.value
		})
	}

	calorieLimit =(evt)=> {
		this.setState({
			calories: Number(evt.target.value) || 0
		})
	}

	fatLimit = (evt) => {
		this.setState({
			fat: Number(evt.target.value) || 0
		})
	}

	proteinLimit = (evt) => {
		this.setState({
			protein: Number(evt.target.value) || 0
		})
	}

	carbLimit = (evt) => {
		this.setState({
			carbs: Number(evt.target.value) || 0
		})
	}

  	render() {
  		
  
    return (

    	<div >
    		<Title
	    			className='title' 
	    			title={this.state.title} 
	    			onChange={this.handleInput}
	    		/>
	    	<div className="App">
    		<div className="leftPane">
    			

	    		<RestInfo 
	    			className='rest-info' 
	    			onChange={this.handleInput}
	    			onChange1={this.calorieLimit}
	    			onChange2={this.fatLimit}
	    			onChange3={this.proteinLimit}
	    			onChange4={this.carbLimit}
	    		/>
    		</div>
    		<div className="rightPane">
    			<ViewScreen 
	    			className='view-screen' 
	    			title={this.state.title}
	    			calories={this.state.calories}
	    			fat={this.state.fat}
	    			protein={this.state.protein}
	    			carbs={this.state.carbs}
	    		/>
    		</div>
    		</div>
   		</div>
    )
  }
}

export default App;
