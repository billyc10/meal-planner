import React, {useState, useEffect} from 'react';
import './App.css';
import getFood from './services/getFood.js';

function App() {
    const [foods, setFoods] = useState([]);
    const [query, setQuery] = useState('stock');

    useEffect(() => {
        const fetchData = async () => {
            var foodArray = await getFood(query);
            setFoods(foodArray);
        };

        fetchData();
    }, []);

    const displayFoods = () => {
        return foods.map( (food) => foodBlock(food));
    };

    const foodBlock = (food) => {
        return (
            <img src={food.photo.thumb} alt={food.food_name}></img>
        );
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target);
        setQuery(event.target.value)
        console.log(query);
    };

  	return (
    	<div className="AppBackground">
            <div className="SearchInput">
                <form>
                    <label>
                        Food: <input type="text" value={query} onChange={handleChange}/>
                    </label>
                </form>
            </div>
            <div className="Results">
                {displayFoods()}
            </div>
    	</div>
  	);
}

export default App;