import React, {useState} from "react";
import '../../App.css';

function Button({text, disabled, isToggleButton}) {
    const [isStartOver, setIsStartOver] = useState(false);
    const buttonStates = [
        {text: text, border: "1px solid #BC4C2A"},
        {text: "Home".toUpperCase(), border: "1px dashed #BC4C2A"}];

    const toggleButtonState = () => {
        setIsStartOver((prevState) => !prevState);
    };

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={isToggleButton ? toggleButtonState : undefined}
            className="styled-buttons"
            style={{border: buttonStates[isStartOver ? 1 : 0].border}}
        >
            {buttonStates[isStartOver ? 1 : 0].text}
        </button>
    );
}

export default Button;
