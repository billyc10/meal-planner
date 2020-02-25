import React, {useState, useEffect} from 'react';
import './App.css';
import getFood from './services/getFood.js';

function App() {
    const [foods, setFoods] = useState([{
        "food_name": "chicken",
        "brand_name": null,
        "serving_qty": 3,
        "serving_unit": "oz",
        "serving_weight_grams": 85,
        "nf_calories": 187,
        "nf_total_fat": 11.11,
        "nf_saturated_fat": 3.11,
        "nf_cholesterol": 79.9,
        "nf_sodium": 60.35,
        "nf_total_carbohydrate": 0.04,
        "nf_dietary_fiber": 0,
        "nf_sugars": null,
        "nf_protein": 20.37,
        "nf_potassium": 173.4,
        "nf_p": 152.15,
        "full_nutrients": [
            {
                "attr_id": 203,
                "value": 20.366
            },
            {
                "attr_id": 204,
                "value": 11.1095
            },
            {
                "attr_id": 205,
                "value": 0.0425
            },
            {
                "attr_id": 207,
                "value": 0.7225
            },
            {
                "attr_id": 208,
                "value": 187
            },
            {
                "attr_id": 255,
                "value": 52.9975
            },
            {
                "attr_id": 268,
                "value": 782
            },
            {
                "attr_id": 291,
                "value": 0
            },
            {
                "attr_id": 301,
                "value": 11.05
            },
            {
                "attr_id": 303,
                "value": 1.3685
            },
            {
                "attr_id": 304,
                "value": 17
            },
            {
                "attr_id": 305,
                "value": 152.15
            },
            {
                "attr_id": 306,
                "value": 173.4
            },
            {
                "attr_id": 307,
                "value": 60.35
            },
            {
                "attr_id": 309,
                "value": 1.4535
            },
            {
                "attr_id": 312,
                "value": 0.0604
            },
            {
                "attr_id": 315,
                "value": 0.023
            },
            {
                "attr_id": 317,
                "value": 13.345
            },
            {
                "attr_id": 318,
                "value": 507.45
            },
            {
                "attr_id": 319,
                "value": 152.15
            },
            {
                "attr_id": 320,
                "value": 152.15
            },
            {
                "attr_id": 401,
                "value": 0.34
            },
            {
                "attr_id": 404,
                "value": 0.0485
            },
            {
                "attr_id": 405,
                "value": 0.1607
            },
            {
                "attr_id": 406,
                "value": 5.9764
            },
            {
                "attr_id": 410,
                "value": 0.8526
            },
            {
                "attr_id": 415,
                "value": 0.289
            },
            {
                "attr_id": 417,
                "value": 19.55
            },
            {
                "attr_id": 418,
                "value": 0.663
            },
            {
                "attr_id": 431,
                "value": 0
            },
            {
                "attr_id": 432,
                "value": 19.55
            },
            {
                "attr_id": 435,
                "value": 19.55
            },
            {
                "attr_id": 501,
                "value": 0.2253
            },
            {
                "attr_id": 502,
                "value": 0.8449
            },
            {
                "attr_id": 503,
                "value": 1.009
            },
            {
                "attr_id": 504,
                "value": 1.4841
            },
            {
                "attr_id": 505,
                "value": 1.6363
            },
            {
                "attr_id": 506,
                "value": 0.5372
            },
            {
                "attr_id": 507,
                "value": 0.2729
            },
            {
                "attr_id": 508,
                "value": 0.7973
            },
            {
                "attr_id": 509,
                "value": 0.652
            },
            {
                "attr_id": 510,
                "value": 0.9911
            },
            {
                "attr_id": 511,
                "value": 1.2895
            },
            {
                "attr_id": 512,
                "value": 0.5848
            },
            {
                "attr_id": 513,
                "value": 1.1815
            },
            {
                "attr_id": 514,
                "value": 1.8224
            },
            {
                "attr_id": 515,
                "value": 2.9801
            },
            {
                "attr_id": 516,
                "value": 1.3413
            },
            {
                "attr_id": 517,
                "value": 1.0098
            },
            {
                "attr_id": 518,
                "value": 0.7327
            },
            {
                "attr_id": 601,
                "value": 79.9
            },
            {
                "attr_id": 606,
                "value": 3.111
            },
            {
                "attr_id": 610,
                "value": 0
            },
            {
                "attr_id": 611,
                "value": 0.017
            },
            {
                "attr_id": 612,
                "value": 0.085
            },
            {
                "attr_id": 613,
                "value": 2.278
            },
            {
                "attr_id": 614,
                "value": 0.629
            },
            {
                "attr_id": 617,
                "value": 3.655
            },
            {
                "attr_id": 618,
                "value": 2.108
            },
            {
                "attr_id": 619,
                "value": 0.0935
            },
            {
                "attr_id": 620,
                "value": 0.102
            },
            {
                "attr_id": 621,
                "value": 0.0255
            },
            {
                "attr_id": 626,
                "value": 0.612
            },
            {
                "attr_id": 628,
                "value": 0.1105
            },
            {
                "attr_id": 629,
                "value": 0.0085
            },
            {
                "attr_id": 630,
                "value": 0
            },
            {
                "attr_id": 631,
                "value": 0.017
            },
            {
                "attr_id": 645,
                "value": 4.437
            },
            {
                "attr_id": 646,
                "value": 2.4225
            }
        ],
        "nix_brand_name": null,
        "nix_brand_id": null,
        "nix_item_name": null,
        "nix_item_id": null,
        "upc": null,
        "consumed_at": "2020-02-25T10:08:47+00:00",
        "metadata": {
            "is_raw_food": false
        },
        "source": 1,
        "ndb_no": 5110,
        "tags": {
            "item": "chicken",
            "measure": null,
            "quantity": "3.0",
            "food_group": 2,
            "tag_id": 9
        },
        "alt_measures": [
            {
                "serving_weight": 85,
                "measure": "oz",
                "seq": 1,
                "qty": 3
            },
            {
                "serving_weight": 235,
                "measure": "unit (yield from 1 lb ready-to-cook chicken)",
                "seq": 2,
                "qty": 1
            },
            {
                "serving_weight": 1072,
                "measure": "chicken",
                "seq": 3,
                "qty": 1
            },
            {
                "serving_weight": 135,
                "measure": "cup",
                "seq": 80,
                "qty": 1
            },
            {
                "serving_weight": 100,
                "measure": "g",
                "seq": null,
                "qty": 100
            },
            {
                "serving_weight": 2.81,
                "measure": "tsp",
                "seq": 101,
                "qty": 1
            },
            {
                "serving_weight": 8.44,
                "measure": "tbsp",
                "seq": 102,
                "qty": 1
            }
        ],
        "lat": null,
        "lng": null,
        "meal_type": 1,
        "photo": {
            "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/9_thumb.jpg",
            "highres": "https://d2xdmhkmkbyw75.cloudfront.net/9_highres.jpg",
            "is_user_uploaded": false
        },
        "sub_recipe": null
    }]);

    /*
    var foodJSON = getFood(foodString);
        foodJSON.foods.forEach( (food) => foodBlock(food));
    */

    const displayFoods = () => {
        return foods.map( (food) => foodBlock(food));
    };

    const foodBlock = (food) => {
        return (
            <img src={food.photo.thumb} alt="chicken"></img>
        );
    };

  	return (
    	<div className="App-background">
            {displayFoods()}
    	</div>
  	);
}

export default App;