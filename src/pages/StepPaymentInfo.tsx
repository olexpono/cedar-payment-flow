import Button from "../components/Button";
import Container from "../components/Container";

function StepPaymentInfo(props: { proceed: () => void }) {
  return <Container variant="block">
    <h3>Payment information</h3>
    <form>
      <Button type="submit">
        Continue
      </Button>
    </form>
  </Container>;
}

export default StepPaymentInfo;