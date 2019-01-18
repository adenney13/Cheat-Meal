import React, {Component} from 'react'

class RestName extends Component {
	render(){
		return(
			<div>
				<form>
					<h2>Drop Down of Restaurant Names</h2>
					<label>Choose Your Restaurant: </label>
					<select placeholder='Restaurants' onChange={this.props.onChange}>
						<option value='Choose'>Choose Restaurant</option>
						<option value="McDonald's">McDonalds</option>
						<option value='Burger King'>Burger King</option>
						<option value="Wendy's">Wendy's</option>
					</select>
				</form>
			</div>
		)
	}
}

export default RestName