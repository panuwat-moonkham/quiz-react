import React from "react";
import style from "./main.module.css";

function ContainerLaout(props) {
  return <div className={style.container}>{props.children}</div>;
}

export default ContainerLaout;
