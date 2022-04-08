import React from 'react'

import './Screen.css'

const Screen = ({value}) => {
    return (
        <input type="text" readOnly name="text" className='screen' value={value}/>
    );
}

export default Screen;