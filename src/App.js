import React, {useState, useEffect} from 'react';
import './App.css';
import getFood from './services/getFood.js';

function App() {
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('stock');

    useEffect(() => {
        const fetchData = async () => {
            var foodArray = await getFood(query);
            setFoods(foodArray);
        };

        fetchData();
    }, [query]);

    const displayFoods = () => {
        return foods.map( (food) => foodBlock(food));
    };

    const foodBlock = (food) => {
        return (
            <img src={food.photo.thumb} alt={food.food_name}></img>
        );
    };

    const handleChange = (event) => {
        setSearch(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        setQuery(search);
    }

  	return (
    	<div className="AppBackground">
            <div className="SearchInput">
                <form onSubmit={handleSubmit}>
                    <label>
                        search food: <input type="text" value={search} onChange={handleChange}/>
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