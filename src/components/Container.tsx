import React from "react";
import styles from "./Container.module.css";

function Container(props: {
  variant?: "block" | "transparent";
  el?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const variant = props.variant ?? "transparent";
  const className =
    styles.container +
    ` ${variant === "block" ? styles.containerBlock : ""}` +
    ` ${props.className ?? ""}`;

  return React.createElement(props?.el ?? "div", { className }, props.children);
}

export default Container;
