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
      </IonContent>
    </>
  );
};

export default withFormik<SignupFormProps, SignupFormValues>({
  displayName: "SignupForm",
  enableReinitialize: true,

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
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
