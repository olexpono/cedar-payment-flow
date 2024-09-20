import Button from "../components/Button";
import Container from "../components/Container";
import styles from "./StepOne.module.css";

function StepOne(props: {
  receiptData: {
    name: string;
    billCount: number;
    amount: string;
  };
  proceed: () => void;
}) {
  return (
    <Container el="main">
      <h2>Hi, {props.receiptData.name}</h2>
      <p>
        You have {props.receiptData.billCount} medical bills ready from ABC
        Health System. You can pay your bills here or verify your identity to
        view full bill details.
      </p>
      <dl className={styles.totalDisplay}>
        <dt className="text-p-bold">Total due</dt>
        <dd className="text-h2">${props.receiptData.amount}</dd>
      </dl>
      <Button onClick={() => props.proceed()}>Pay total</Button>
    </Container>
  );
}

export default StepOne;
