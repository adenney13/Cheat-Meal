import React, { Component } from 'react'

class Parameters extends Component {
	render() {
		return(
			<form>
				<h2>Input Parameters</h2>
				<ul>
					<li><input 
						type='number' 
						placeholder='Calories'
						onChange={this.props.onChange1} 
						/>
					Calories
					
					</li>
					
					<li><input 
						type='number' 
						placeholder='Fat'
						onChange={this.props.onChange2} 
						/>
					Grams
					
					</li>
					
					<li><input 
						type='number' 
						placeholder='Protein' 
						onChange={this.props.onChange3}
						/>
					Grams
					
					</li>
					
					<li><input 
						type='number' 
						placeholder='Carbs' 
						onChange={this.props.onChange4}
						/>
					Grams
					
					</li>


				</ul>
			</form>
		)
	}
}

export default Parameters 