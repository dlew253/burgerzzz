import React, {useState} from 'react';
import Ingredient from './Ingredient';

function IngredientsList(props) {
    return(
        <ul>
            {props.ingredients.map((ingredient)=>{
                return (
                    <li name={ingredient.name} onClick={(e)=>props.action(e)}>
                        <Ingredient color={ingredient.color} ingredient={ingredient.name} />
                        
                    </li>
                )
            })}
        </ul>
    )
}

export default IngredientsList;