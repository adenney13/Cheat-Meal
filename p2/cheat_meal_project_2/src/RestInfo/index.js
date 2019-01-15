import React, { Component } from 'react'
import RestName from './RestName'
import Parameters from './Parameters'

class RestInfo extends Component {
	render(){
		return(
			<div>
				<RestName onChange={this.props.onChange}/>
				<Parameters />
			</div>
		)
	}
}

export default RestInfo