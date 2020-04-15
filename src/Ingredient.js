import React from 'react';

function Ingredient(props) {
        return (
            <div backgroundColor={props.color}>
                {props.ingredient}

            </div>
        )
    }
export default Ingredient;