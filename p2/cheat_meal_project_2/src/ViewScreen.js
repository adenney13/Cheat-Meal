import React, {Component} from 'react'
import Axios from 'axios';
import testData from './testData.js'
import itemsData from './testDataIds'

const fetchedItems = [];
class ViewScreen extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
		}
	}


	fetchItems() {
		
		const opt = {
			headers: {
				"X-RapidAPI-Key": '535f53ceddmsh42ab029a35e7140p141c38jsn2063d86bb560'
			}
		}
		for (let i = 0; i < itemsData.length; i++) {
			Axios(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/${itemsData[i]}`, opt)
			.then(resp => {
				this.setState({
					items: resp.data,
				})
				fetchedItems.push(this.state.items)
				console.log(fetchedItems, 'items')
			})
		}
	}

	async componentDidMount() {
		await this.fetchItems();
	}
	

	render() {
		
		const diffItems = fetchedItems.map((eachItem, index) => {

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

		const restTitle = this.props.title
		const testRestTitle = eachItem.restaurantChain

		const inputDetected = calories || protein || fat || carbs || restTitle
			return(
				<div key={index}>
					
					<p>{inputDetected && (restTitle ? restTitle === testRestTitle: true) && 
						(calories ? calories >= testCalories : true) && 
						(fat ? fat >= numFat : true) && 
						(protein ? protein >= numProtein : true) && 
						(carbs ? carbs >= numCarbs : true) ? 
							<div>
								<h1>{eachItem.title}</h1>
								<img src={eachItem.images[2]} /> 
								<p>Restaurant: {eachItem.restaurantChain}</p>
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
			<div>{diffItems}</div>
		)
	}
}

export default ViewScreen


				// <p>{ ? <img src={testData.images[2]} /> : '2'}</p>
				// <p>{ ? <img src={testData.images[2]} /> : '3'}</p>
				// <p>{ ? <img src={testData.images[2]} /> : '4'}</p>