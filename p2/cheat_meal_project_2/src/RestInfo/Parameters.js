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
						/>
					Calories
					
					</li>
					
					<li><input 
						type='number' 
						placeholder='Fat' 
						/>
					Grams
					
					</li>
					
					<li><input 
						type='number' 
						placeholder='Protein' 
						/>
					Grams
					
					</li>
					
					<li><input 
						type='number' 
						placeholder='Carbs' 
						/>
					Grams
					
					</li>


				</ul>
			</form>
		)
	}
}

export default Parameters 