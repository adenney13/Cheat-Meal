# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 14| Project Description | Complete
|Jan 15| Wireframes / Priority Matrix / Functional Components | Complete
|Jan 15| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 16| Pseudocode / actual code | Complete
|Jan 16| Initial Clickable Model  | Complete
|Jan 17| MVP | Complete
|Jan 18| Present | Incomplete


## Project Description

Love fast food? Want to make sure your cheat meal fits in with your diet? Well, look no further! Cheat Meal is the perfect tool for you! Simply select the fast food restaurant of your choice, input your restrictions, if any, and we'll do the rest! The view screen will pop up with delicious pictures of what you CAN eat, not what you CAN'T!

## Wireframes

https://cloudinary.com/console/media_library/folders/all/Project%202%20WireFrames

## Priority Matrix

https://cloudinary.com/console/media_library/folders/all/Project%202%20Priority%20Matrix

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### 
#### MVP 

-Title Component 

-RestInfo Component

-Paramaters and RestName Components in RestInfo Component

-View Screen Component

-Fetch API Data, use Parameters

-Render view scream with image/applicable food items

-Title component changes when RestName is chosen

#### PostMVP 

-Multiple restaurants

-Change background with title change

-Rewrite functions for conversion


## React Architectural Design

https://cloudinary.com/console/media_library/folders/all/Project%202%20Architecture

#### 

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### 
| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### 
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build out Components | H | 5hrs| 6hrs |
| Build out form in Parameters | H | 2hrs| 2.5hrs|
| Fetch API Data and pass down to components with parameters| H | 5hrs| 2hrs|
| Render results on view screen| H |3hrs|3hrs|
| Styling | H | 3hrs | 2hrs|
| Move info from JSON to API| H | 2hrs| 2hrs|
| Total | H | 20hrs | 17.5hrs| 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
This super long ternary was the basis for being able to filter "live". inputDetected is a const that had all of my paramter variables with || separating them. So, this allowed for the restaurant title to be displayed, and used user input to match the corresponding data... if it did, it would return everything that matched all given criteria. If the field was left blank, it was ignored.
	
	const inputDetected = calories || protein || fat || carbs || restTitle
			
			return(
				<div key={index}>
					<p>{inputDetected && (restTitle ? restTitle === testRestTitle: true) && 
						(calories ? calories >= testCalories : true) && 
						(fat ? fat >= numFat : true) && 
						(protein ? protein >= numProtein : true) && 
						(carbs ? carbs >= numCarbs : true) ? 
							<div>
								<h1 className="restTitle">{eachItem.title}</h1>
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

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### 

My main issue was with my API...only 50 pull requests and 500 results allowed a day, so I had to figure out a way to build my App without actually using my API. Had to roll up my sleeves and hard code in several objects and then, with help, figure out a way to get my API to pull only a handful of items as opposed to all 300 items from a restaurant at a time. So I got id numbers for specific items I wanted, set them in an array, pushed it through a for-loop, pushed that to an empty array and then worked from those objects. 
I had to get help for several things I wanted to do, but wasn't 100% sure how. Still not 100% sure if I could replicate these from memory, BUT, everything takes practice so at least I now have a record of how I completed a project.
