import React  from "react";

import './ButtonWrapper.css';

const ButtonWrapper = ({children}) => {
    return (
        <div className="buttonWrapper">{children}</div>
    );
}

export default ButtonWrapper;