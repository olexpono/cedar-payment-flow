import Button from "../components/Button";
import Stepper from "../components/Stepper";
import Container from "../components/Container";
import styles from "./StepReview.module.css";

function StepReview(props: {
  receiptData: {
    name: string;
    billCount: number;
    amount: string;
  };
  proceed: () => void;
}) {
  return (
    <Container variant="block">
      <Stepper num={2}>Review and pay</Stepper>
      <p className={styles.paragraphHighlight}>
        You&apos;re about to make a payment of{" "}
        <strong>${props.receiptData.amount}</strong>
      </p>

      <div className={styles.paymentInfoBlock}>
        <div>
          <span className="text-label">Payment method</span>
        </div>
        <div className={styles.paymentMethod}>
          <img src="/assets/icons/visa.svg" />
          <span>Card ending in •&thinsp;•&thinsp;•&thinsp;• 4242</span>
        </div>
      </div>
      <Button onClick={() => props.proceed()}>
        Pay ${props.receiptData.amount}
      </Button>
    </Container>
  );
}

export default StepReview;
