import React, { useState } from "react";

const Tile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const _mouseEnter = (e) => {
    if (!mouseOver) {
      isOpen && setIsOpen(true);
    }
  };

  const _mouseLeave = (e) => {
    if (mouseOver) {
      isOpen && setMouseOver(false);
    }
  };

  const _clickHandler = (e) => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const tileStyle = isOpen
    ? {
        width: "62vw",
        height: "62vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "0",
        marginTop: "-31vw",
        marginLeft: "-31vw",
        boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        transform: "none",
        zIndex: "15",
      }
    : {
        width: "18vw",
        height: "18vw",
        zIndex: "3",
      };

  return (
    <div className="tile">
      <img
        onMouseEnter={_mouseEnter}
        onMouseLeave={_mouseLeave}
        onClick={_clickHandler}
        src={props.data.image}
        alt={props.data.name}
        style={tileStyle}
      />
    </div>
  );
};

export default Tile;

//  {
//   Modify styles based on state values

//   return (

//   );
// }

// ReactDOM.render(
//   <App data={data} />,
//   app
// );
