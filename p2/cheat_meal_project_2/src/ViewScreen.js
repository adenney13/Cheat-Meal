import React, {Component} from 'react'
import testData from './testData.js'

class ViewScreen extends Component {
	render() {
		const calories = this.props.calories
		const testCalories = testData.nutrition.calories
		const fat = this.props.fat
		const testFat = testData.nutrition.fat
		const splitFat = [...testFat]
			splitFat.pop()
			const joinFat = splitFat.join('')
			const numFat = Number(joinFat)
			console.log(numFat)
		return(
		<div>
			<h1>View Screen</h1>
				<p>{calories < testCalories ? 'You can eat' : 'TooManyCalories'}</p>
				<p>{fat < numFat ? 'You can eat' : 'TooMuchFat'}</p>
				
			<div className='screen'>
				
			</div>
		</div>

		)
	}
}

export default ViewScreen