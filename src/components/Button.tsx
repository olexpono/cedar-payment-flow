import styles from "./Button.module.css";

function Button(props: {
  className?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={styles.button + ` ${props.className ?? ""}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
