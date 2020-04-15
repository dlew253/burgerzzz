import React, {useState} from 'react';
import BurgerPane from './BurgerPane';
import IngredientsList from './IngredientsList';
import './App.css';


let burgerSeed = [        
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
];

function App() {
  const [ingredients, setIngredients] = useState(burgerSeed);
  const [stack, setStack] = useState([]);

  function addToStack(e) {
    let result = burgerSeed.filter(ingredient => ingredient.name === e.target.innerText);
    console.log(result[0]);
    setStack([result[0], ...stack])
  }
  function clear(e) {
    setStack([]);
  }
  return (
    <div>
      <IngredientsList ingredients={ingredients} action={addToStack} />
      <BurgerPane stack={stack} action={clear} />
    </div>
  );
}
 
export default App;