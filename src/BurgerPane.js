import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';


function BurgerPane(props) {
    return (
        <div class="burgerpane">
            <BurgerStack ingredients={props.stack} />
            <ClearBurger action={props.action} />
        </div>
    )
}

export default BurgerPane;