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

		const protein = this.props.protein
		const testProtein = testData.nutrition.protein
		const splitProtein = [...testProtein]
			splitProtein.pop()
			const joinProtein = splitProtein.join('')
			const numProtein = Number(joinProtein)
			console.log(numProtein)

		const carbs = this.props.carbs
		const testCarbs = testData.nutrition.carbs
		const splitCarbs = [...testCarbs]
			splitCarbs.pop()
			const joinCarbs = splitCarbs.join('')
			const numCarbs = Number(joinCarbs)
			console.log(numCarbs)

		const youCanEat = 'You Can Eat'

		return(
		<div>
			<h1>View Screen</h1>
				<p>{calories < testCalories ? youCanEat : 'TooManyCalories'}</p>
				<p>{fat < numFat ? youCanEat : 'TooMuchFat'}</p>
				<p>{protein < numProtein ? youCanEat : 'Too Much Protein'}</p>
				<p>{carbs < numCarbs ? youCanEat : 'Too Many Carbs'}</p>
				
			<div className='screen'>
				
			</div>
		</div>

		)
	}
}

export default ViewScreen