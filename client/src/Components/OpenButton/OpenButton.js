import React from "react";
import PlusIcon from "../../Assets/plus.png";
import MinusIcon from "../../Assets/minus.png";
import "./OpenButton.css";

// Button component that changes between plus and minus after clicking

function OpenButton(props) {
  return (
    <button onClick={props.onClick} className="open-button">
      {props.plusIcon ? (
        <img src={PlusIcon} alt="Plus icon" className="open-button__icon" />
      ) : (
        <img src={MinusIcon} alt="Minus icon" className="open-button__icon" />
      )}
    </button>
  );
}

export default OpenButton;
