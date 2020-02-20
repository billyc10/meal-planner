import React from 'react';
import './App.css';
import getFood from './services/getFood.js';

function App() {
    const displayFoods = (foodString) => {
        var foodJSON = getFood(foodString);
        foodJSON.foods.forEach( (food) => foodBlock(food));
    };

    const foodBlock = (food) => {
        return (
            <img src={food.photo.highres} alt="chicken"></img>
        );
    };

  	return (
    	<div className="App-background">
            {displayFoods("chicken")}
    	</div>
  	);
}

export default App;