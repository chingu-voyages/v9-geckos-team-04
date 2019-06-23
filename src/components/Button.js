import React from 'react';
import './Button.css';

function Button(props){
    return (
      <button
        value={props.value}
        onClick={props.handleClick}
        className={props.styles}>
        {props.title}
      </button>
    );
}

export default Button;
