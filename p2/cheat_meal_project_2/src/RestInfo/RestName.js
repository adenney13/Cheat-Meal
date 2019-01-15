import React, {Component} from 'react'

class RestName extends Component {
	render(){
		return(
			<div>
				<h3>Drop Down of Restaurant Names</h3>
				<label for='restaurant-names'>Choose Your Restaurant: </label>
				<input list='restaurant-names' placeholder='Restaurants'/>
			
				<datalist id='restaurant-names'>
					<option value='McDonalds' />
					<option value='Burger King' />
					<option value='Wendys' />
				</datalist>
			</div>
		)
	}
}

export default RestName