import React, { useState } from "react";

const DynamicButton = () => {
  const [buttonText, setButtonText] = useState("Click me");
  const [buttonColor, setButtonColor] = useState("yellow");

  const handleButtonClick = () => {
    // You can add any functionality you want when the button is clicked here
    console.log("Button clicked!");
  };

  return (
    <div>
      <button
        className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded`}
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default DynamicButton;
