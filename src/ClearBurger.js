import React from 'react';

function ClearBurger(props) {
    return(
        <div>
        <button onClick={(e)=>props.action(e)}>Clear the Burger</button>
        </div>
    )
}

export default ClearBurger;