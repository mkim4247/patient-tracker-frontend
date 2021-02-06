import React, { useState, InputHTMLAttributes, ReactElement } from "react";
import { FieldProps, getIn } from "formik";
import { IonItem, IonItemGroup } from "@ionic/react";

interface Props extends InputHTMLAttributes<Element> {
  label: string;
  required?: boolean;
  extraContent?: ReactElement;
}

const FormikInput: React.FC<FieldProps & Props> = ({
  field: { name, value, onBlur },
  form,
  label,
  required = false,
  extraContent = null,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const error = getIn(form.errors, name);
  const touched = getIn(form.touched, name);

  return (
    <IonItemGroup>
      <IonItem></IonItem>
    </IonItemGroup>
  );
};

export default FormikInput;
