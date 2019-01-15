import React, { Component } from 'react'
import RestName from './RestName'
import Parameters from './Parameters'

class RestInfo extends Component {

	render(){
		return(
			<div>
				<RestName />
				<Parameters />
			</div>
		)
	}
}

export default RestInfo