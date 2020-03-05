import React, {useState} from 'react';
import {checkPropTypes} from "prop-types";

function Ingredients(props) {
    let ingredientsList = props.ingredients.map((item)=> {
        return (<li>{item.name}
            <button value={item.color} onClick={(e) => props.addIngredients(e)}>Slap this baddie on your burg!</button>
        </li>);
    })
    return (
        <ul>
            {ingredientsList}
        </ul>
    )
}
export default Ingredients;