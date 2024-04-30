import React from "react";

const MainContent = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-1">
        {props.Children}
      </div>
    </>
  );
};
export default MainContent;
