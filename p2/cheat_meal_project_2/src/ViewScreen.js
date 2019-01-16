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

		const inputDetected = calories || protein || fat || carbs 

	

		return(
		<div>
			<h1>View </h1>
				<p>{inputDetected && (calories ? calories >= testCalories : true) && (fat ? fat >= numFat : true) && (protein ? protein >= numProtein : true) && (carbs ? carbs >= numCarbs : true) ? 
					<div>
						<h1>{testData.title}</h1>
						<img src={testData.images[2]} /> 
					</div> : 
					'1'}
				</p>

				
			<div className='screen'>
				
			</div>
		</div>

		)
	}
}

export default ViewScreen


				// <p>{ ? <img src={testData.images[2]} /> : '2'}</p>
				// <p>{ ? <img src={testData.images[2]} /> : '3'}</p>
				// <p>{ ? <img src={testData.images[2]} /> : '4'}</p>