import React from 'react';
import './Button.css';
import { pseudoRandomBytes } from 'crypto';

// É possível usar dentro do JSX, javascript pseudoRandomBytes, para tal, delimita-se o escopo com ` `
export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation ' : ''
    classes += props.double ? 'double ' : ''
    classes += props.triple ? 'triple ' : ''


    return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}