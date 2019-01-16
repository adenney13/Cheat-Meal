import React, { Component } from 'react'
import RestName from './RestName'
import Parameters from './Parameters'

class RestInfo extends Component {
	render(){
		return(
			<div>
				<RestName onChange={this.props.onChange}/>
				<Parameters 
					onChange1={this.props.onChange1}
					onChange2={this.props.onChange2}
					onChange3={this.props.onChange3}
					onChange4={this.props.onChange4}

					/>
			</div>
		)
	}
}

export default RestInfo