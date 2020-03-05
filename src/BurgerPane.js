import React, {useState} from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';
import {checkPropTypes} from "prop-types";

function BurgerPane(props) {
    return (
        <div class="burgerpane">
            <BurgerStack ingredients={props.ingredients} />
            <ClearBurger clearburger={props.clearburger} />
        </div>
    )
}

export default BurgerPane;