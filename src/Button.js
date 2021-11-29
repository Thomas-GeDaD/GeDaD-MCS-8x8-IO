import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

render (){
return(
    <div className="Button">
        <button className='Button'
        onClick = {this.props.onClick}
        >
            {this.props.label}

        </button>
    </div>

        )
    }
}
export default Button;
