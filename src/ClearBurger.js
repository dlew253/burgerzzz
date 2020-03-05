import React, {useState} from 'react';

function ClearBurger(props) {
    return(
        <button onClick={()=>props.ClearBurger()}>Clear the Burger</button>
    );
}

export default ClearBurger;