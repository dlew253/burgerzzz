import React, {useState} from 'react';
import BurgerIngredients from "./BurgerIngredients";
import {checkPropTypes} from "prop-types";

function BurgerStack(props) {
    return (
        <div>
            <BurgerIngredients ingredients={props.ingredients} />
        </div>
    )
}

export default BurgerStack;