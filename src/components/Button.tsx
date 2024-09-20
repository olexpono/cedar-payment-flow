import styles from "./Button.module.css";

function Button(props: {
  onClick?: React.EventHandler<HTMLButtonElement>,
  children: React.ReactNode,
}) {
  return <button onClick={props.onClick} className={styles.button}>{props.children}</button>;
}

export default Button;