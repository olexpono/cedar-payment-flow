import { useState } from "react";
import styles from "./App.module.css";
import StepOne from "./pages/StepOne";
import StepPaymentInfo from "./pages/StepPaymentInfo";
import StepReview from "./pages/StepReview";
import StepThanks from "./pages/StepThanks";

function App() {
  // Typically this would be done via a router
  const [step, setStep] = useState<
    "start" | "paymentInfo" | "review" | "thanks"
  >("start");

  const RECEIPT_DATA = {
    name: "Taylor",
    billCount: 6,
    amount: "600.00", // Typically cents integers etc for payments
  };

  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <span className="sr-only">ABC Health System</span>
          <img
            alt="ABC Health System Logo"
            src="/assets/providers/ABC_Health.svg"
          />
        </h1>
      </nav>

      {/* Typically this would be done via a router */}
      {step === "start" && (
        <StepOne
          receiptData={RECEIPT_DATA}
          proceed={() => setStep("paymentInfo")}
        ></StepOne>
      )}

      {step === "paymentInfo" && (
        <StepPaymentInfo proceed={() => setStep("review")}></StepPaymentInfo>
      )}

      {step === "review" && (
        <StepReview
          receiptData={RECEIPT_DATA}
          proceed={() => setStep("thanks")}
        ></StepReview>
      )}

      {step === "thanks" && <StepThanks></StepThanks>}
    </>
  );
}

export default App;
