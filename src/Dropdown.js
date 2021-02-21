import React from 'react'
import {useState} from 'react';
function Dropdown(props) {
    const [open, setopen] = useState(false)
    return (
        <div>
            <a href='#' onClick={() => setopen(!open)}> {props.icon}</a>
            {open && props.childred}
        </div>
    )
}

export default Dropdown