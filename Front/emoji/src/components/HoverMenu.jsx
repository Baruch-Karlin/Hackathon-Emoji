import React, { useState } from "react";

const HoverMenu = () => {
  const [menu_toggler, set_menu_toggler] = useState(null)
  return (
    <div className="header">
        <img onClick={()=>set_menu_toggler('open')} className="logo" src='/menu.png' alt="logo"/>
        <div className="counter">001</div>
    </div>
  );
};

export default HoverMenu;
