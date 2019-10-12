import React from 'react';
import './Display.css';

//Só usa-se chaves para delimitar escopo se houver o return
export default props => 
    <div className="display">{ props.value }</div>

