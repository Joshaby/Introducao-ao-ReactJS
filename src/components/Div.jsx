import React from 'react';

function Div(props) {

    return (
        <div>
            <label>{props.label}</label>
            {props.children}
        </div>
    );
}

export default Div;