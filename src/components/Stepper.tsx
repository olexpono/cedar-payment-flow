import styles from "./Stepper.module.css";

function Stepper(props: { num: number; children: React.ReactNode }) {
  return (
    <h2 className={"text-h3 " + styles.stepper}>
      <span className={styles.stepperCircle}>{props.num}</span>
      <span>{props.children}</span>
    </h2>
  );
}

export default Stepper;
