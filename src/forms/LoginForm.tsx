import React from "react";
import { withFormik, FormikProps, FormikBag, Field } from "formik";
import { IonContent, IonItem, IonLabel } from "@ionic/react";

import * as Yup from "yup";

import { User, LoginFormValues } from "types";
import FormikInput from "./fields/FormikInput";

interface LoginFormProps {
  user: User;
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps & FormikProps<LoginFormValues>> = ({
  isValid,
  submitForm,
}) => {
  return (
    <>
      <IonContent>
        <Field
          name="email"
          component={FormikInput}
          type="text"
          label="Email Address"
          placeholder="Enter email here"
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

export default withFormik<LoginFormProps, LoginFormValues>({
  displayName: "LoginForm",
  enableReinitialize: true,

  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email address is required"),
    password: Yup.string().required("Password is required"),
  }),

  mapPropsToValues({ user }: LoginFormProps): LoginFormValues {
    return user as LoginFormValues;
  },

  handleSubmit(
    values: LoginFormValues,
    {
      props: { onSubmit },
      setSubmitting,
    }: FormikBag<LoginFormProps, LoginFormValues>
  ) {
    onSubmit(values);
    setSubmitting(false);
  },
})(LoginForm);
