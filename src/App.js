import React, {useState} from 'react';
import BurgerPane from './BurgerPane';
import IngredientsList from './IngredientsList';
import './App.css';
import {checkPropTypes} from "prop-types";

function App() {
  let [ingredients, setIngredients] = useState([        
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ]);
    let [burIn, setBurIn] = useState ([]);

    const addIngredient = (e) => {
      setBurIn([...burIn, e.target.value]);
    }
    const clearBurger = () =>{
      setBurIn([]);
    }
    return(
      <div class="wrapper">
        <IngredientsList ingredients={ingredients} burIn={burIn}/>
      <BurgerPane ingredients={burIn} clearBurger={clearBurger}/>
    </div>
  );
}
export default App;