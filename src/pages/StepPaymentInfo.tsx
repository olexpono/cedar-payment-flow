import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import Button from "../components/Button";
import Container from "../components/Container";
import FormField from "../components/FormField";
import Stepper from "../components/Stepper";
import styles from "./StepPaymentInfo.module.css";

const isNumeric = (value: string) => /^\d+$/.test(value.trim());

function StepPaymentInfo(props: { proceed: () => void }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <Container variant="block">
      <Stepper num={1}>Payment information</Stepper>
      <Formik
        initialValues={{
          cardNumber: "",
          expires: "",
          security: "",
          nameOnCard: "",
          zipcode: "",
        }}
        validateOnBlur={true}
        validateOnChange={hasSubmitted}
        validationSchema={Yup.object().shape({
          cardNumber: Yup.string()
            .required("Card number is required")
            .test("numeric", "Card number should be numeric", isNumeric),
          expires: Yup.string()
            .required("Card expiration is required")
            .test(
              "slash-format",
              "Expiry expected to be MM/YY, in the future",
              (value) => {
                if (!value.includes("/")) {
                  return false;
                }
                const [month, year] = value.split("/");
                return parseInt(month) <= 12 && parseInt(year) >= 24;
              },
            ),
          security: Yup.string()
            .required("CVV is required")
            .test("numeric", "CVV should be numeric", (value: string) =>
              /^\d+$/.test(value.trim()),
            ),
          nameOnCard: Yup.string().required("Name is required"),
          zipcode: Yup.string()
            .required("Zipcode is required")
            .test("numeric", "Zipcode number should be numeric", isNumeric),
        })}
        onSubmit={() => {
          setHasSubmitted(true);
          props.proceed();
        }}
      >
        {(props) => (
          <form className={styles.form} onSubmit={props.handleSubmit}>
            <FormField
              labelText="Card number"
              id="pi-cardNumber"
              isNumeric={true}
              name="cardNumber"
              placeholder="1234⋅⋅⋅⋅⋅⋅⋅⋅"
              handleChange={props.handleChange}
            />

            <div className={styles.split}>
              <FormField
                labelText="Expires"
                id="pi-expires"
                name="expires"
                placeholder="MM/YY"
                error={props.errors.expires}
                handleChange={props.handleChange}
              />

              <FormField
                labelText="Security Code"
                id="pi-security"
                isNumeric={true}
                name="security"
                placeholder=""
                error={props.errors.security}
                handleChange={props.handleChange}
              />
            </div>

            <FormField
              labelText="Name on card"
              id="pi-nameOnCard"
              name="nameOnCard"
              placeholder="Alice Cardowner"
              error={props.errors.nameOnCard}
              handleChange={props.handleChange}
            />

            <FormField
              labelText="Zip code"
              id="pi-zipcode"
              isNumeric={true}
              name="zipcode"
              placeholder=""
              error={props.errors.zipcode}
              handleChange={props.handleChange}
            />

            <Button className={styles.lastButton} type="submit">
              Continue
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default StepPaymentInfo;
