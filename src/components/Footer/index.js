import React from "react";
import style from "./main.module.css";

function Footer(props) {
  return (
    <>
      <div className={style.container}>
        <p>
          {props.footerName} {props.name}
        </p>
        <button type="Login">Login</button>
      </div>
    </>
  );
}

export default Footer;
