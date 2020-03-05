import React, {useState} from 'react';
import {checkPropTypes} from "prop-types";
import Ingredients from './Ingredients';

function IngredientsList(props) {
    return(
        <div class="list">
            <Ingredients ingredients={props.ingredients} addIngredients={props.addIngredients}/>
        </div>
    )
}

export default IngredientsList;