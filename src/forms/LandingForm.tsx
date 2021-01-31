import React from "react";
import { withFormik, FormikProps, FormikBag, Field } from "formik";
import { IonContent } from "@ionic/react";

import * as Yup from "yup";

import { User, LandingFormValues } from "types";

interface LandingFormProps {
  user: User;
  onSubmit: (values: LandingFormValues) => void;
}

const LandingForm: React.FC<
  LandingFormProps & FormikProps<LandingFormValues>
> = ({ isValid, submitForm }) => {
  return (
    <IonContent>
      <Field />
    </IonContent>
  );
};

export default withFormik<LandingFormProps, LandingFormValues>({
  displayName: "LandingForm",
  enableReinitialize: true,

  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please enter a valid email"),
  }),

  mapPropsToValues({ user }: LandingFormProps): LandingFormValues {
    return user as LandingFormValues;
  },

  handleSubmit(
    values: LandingFormValues,
    {
      props: { onSubmit },
      setSubmitting,
    }: FormikBag<LandingFormProps, LandingFormValues>
  ) {
    onSubmit(values);
    setSubmitting(false);
  },
})(LandingForm);
