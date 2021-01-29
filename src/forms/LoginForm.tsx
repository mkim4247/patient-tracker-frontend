import React from "react";
import { withFormik, FormikProps, FormikBag, Field } from "formik";
import { IonContent, IonItem, IonLabel } from "@ionic/react";

import * as Yup from "yup";

import { User, LoginFormValues } from "types";

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
        <Field />
      </IonContent>
    </>
  );
};

export default withFormik<LoginFormProps, LoginFormValues>({
  displayName: "LoginForm",
  enableReinitialize: true,

  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email address is required"),
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
