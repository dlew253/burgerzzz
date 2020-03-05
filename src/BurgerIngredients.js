import React, {useState} from 'react';
import {checkPropTypes} from "prop-types";

function BurgerIngredients(props) {
    let burInList = props.ingredients.map((item)=>{
        let divStyle = {
            background: item,
            color: "white"
        }
        return (<div style={divStyle}>
            <h2>{item}</h2>
        </div>);
    })
    return(
        <div>
            {burInList}
        </div>
    )
}
export default BurgerIngredients;