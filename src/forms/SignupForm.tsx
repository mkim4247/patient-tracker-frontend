import React from "react";
import { withFormik, FormikProps, FormikBag, Field } from "formik";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonItem,
  IonLabel,
} from "@ionic/react";

import * as Yup from "yup";

import { User, SignupFormValues } from "types";
import { titleCase } from "utils/formatters";
import FormikInput from "./fields/FormikInput";
import Signup from "pages/Signup";

interface SignupFormProps {
  user: User;
  onSubmit: (values: SignupFormValues) => void;
}

const SignupForm: React.FC<SignupFormProps & FormikProps<SignupFormValues>> = ({
  isValid,
  submitForm,
}) => {
  return (
    <>
      <IonContent>
        <Field
          name="firstName"
          component={FormikInput}
          type="text"
          label="First Name"
          placeholder="Enter first name here"
          formatter={titleCase}
          required
        />

        <Field
          name="lastName"
          component={FormikInput}
          type="text"
          label="Last Name"
          placeholder="Enter last name here"
          formatter={titleCase}
          required
        />

        <Field
          name="email"
          component={FormikInput}
          type="text"
          label="Email Address"
          placeholder="Enter email address here"
          required
        />
        <Field
          name="password"
          component={FormikInput}
          type="text"
          label="Password"
          placeholder="Enter password here"
          required
        />
      </IonContent>
    </>
  );
};

export default withFormik<SignupFormProps, SignupFormValues>({
  displayName: "SignupForm",
  enableReinitialize: true,

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  }),

  mapPropsToValues({ user }: SignupFormProps): SignupFormValues {
    return user as SignupFormValues;
  },

  handleSubmit(
    values: SignupFormValues,
    {
      props: { onSubmit },
      setSubmitting,
    }: FormikBag<SignupFormProps, SignupFormValues>
  ) {
    onSubmit(values);
    setSubmitting(false);
  },
})(SignupForm);
