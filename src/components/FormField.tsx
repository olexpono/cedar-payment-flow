import { Field, ErrorMessage } from "formik";
import { FormikHandlers } from "formik";
import styles from "./FormField.module.css";

export interface FormFieldProps {
  name: string;
  id: string;
  isNumeric?: boolean;
  labelText: string;
  placeholder: string;
  error?: string;
  handleChange: FormikHandlers["handleChange"];
}

function FormField(props: FormFieldProps) {
  return (
    <div className={styles.formField}>
      <label className={"text-label " + styles.label} htmlFor={props.id}>
        {props.labelText}
      </label>
      <Field handleChange={props.handleChange} name={props.name}>
        {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {({ field, meta }: any) => (
          <div className={styles.formFieldInner}>
            <input
              type="text"
              id={props.id}
              placeholder={props.placeholder}
              {...(meta.error
                ? { "aria-errormessage": `validation-error-${props.id}` }
                : {})}
              {...(props.isNumeric ? { inputmode: "numeric" } : {})}
              {...field}
              className={
                styles.formFieldInput +
                ` ${meta.error ? styles.formFieldInputError : ""}`
              }
            />
            {meta.touched && meta.error && (
              <img
                aria-role="presentation"
                className={styles.inputStatusIcon}
                src="/assets/icons/alert-circle.svg"
              />
            )}
            {meta.touched && meta.value && !meta.error && (
              <img
                aria-role="presentation"
                className={styles.inputStatusIcon}
                src="/assets/icons/check.svg"
              />
            )}
          </div>
        )}
        {/* eslint-enable @typescript-eslint/no-unsafe-member-access */}
      </Field>
      <ErrorMessage
        component="span"
        id={`validation-error-${props.id}`}
        className={"text-validation-error " + styles.validationError}
        name={props.name}
      />
    </div>
  );
}

export default FormField;
