import React, {Component} from 'react'
import testData from './testData.js'

class ViewScreen extends Component {
	render() {
		
		const diffItems = testData.map((eachItem) => {

			const calories = this.props.calories
		const testCalories = eachItem.nutrition.calories
		
		const fat = this.props.fat
		const testFat = eachItem.nutrition.fat
		const splitFat = [...testFat]
			splitFat.pop()
			const joinFat = splitFat.join('')
			const numFat = Number(joinFat)
			console.log(numFat)

		const protein = this.props.protein
		const testProtein = eachItem.nutrition.protein
		const splitProtein = [...testProtein]
			splitProtein.pop()
			const joinProtein = splitProtein.join('')
			const numProtein = Number(joinProtein)
			console.log(numProtein)

		const carbs = this.props.carbs
		const testCarbs = eachItem.nutrition.carbs
		const splitCarbs = [...testCarbs]
			splitCarbs.pop()
			const joinCarbs = splitCarbs.join('')
			const numCarbs = Number(joinCarbs)
			console.log(numCarbs)

		const inputDetected = calories || protein || fat || carbs 
			return(
				<div>
					
					<p>{inputDetected && (calories ? calories >= testCalories : true) && (fat ? fat >= numFat : true) && (protein ? protein >= numProtein : true) && (carbs ? carbs >= numCarbs : true) ? 
					<div>
						<h1>{eachItem.title}</h1>
						<img src={eachItem.images[2]} /> 
						<p>Calories: {eachItem.nutrition.calories}</p>
						<p>Fat: {eachItem.nutrition.fat}</p>
						<p>Protein: {eachItem.nutrition.protein}</p>
						<p>Carbs: {eachItem.nutrition.carbs}</p>
					</div> : 
					''}
				</p>
		</div>
			)
		})

		return(
			<div>
				{diffItems}
			</div>
		)
	}
}

export default ViewScreen


				// <p>{ ? <img src={testData.images[2]} /> : '2'}</p>
				// <p>{ ? <img src={testData.images[2]} /> : '3'}</p>
				// <p>{ ? <img src={testData.images[2]} /> : '4'}</p>