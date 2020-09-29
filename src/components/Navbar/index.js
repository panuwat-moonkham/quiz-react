import React from "react";
import style from "./main.module.css";

function Navbar(props) {
  return (
    <div className={style.container}>
      <div className="logo">
        <h1>LoGo</h1>
      </div>
      <div className="menubar">
        <button type="Sign In">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
