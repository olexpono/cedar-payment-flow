import styles from "./Button.module.css";

function Button(props: {
  type?: "button" | "submit",
  onClick?: React.EventHandler<HTMLButtonElement>,
  children: React.ReactNode,
}) {
  return <button type={props.type ?? "button"} onClick={props.onClick} className={styles.button}>{props.children}</button>;
}

export default Button;