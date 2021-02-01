import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IonPage } from "@ionic/react";

import { SignupFormValues } from "types";
import useStores from "hooks/useStores";
import SignupForm from "forms/SignupForm";

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const { userStore } = useStores();

  const handleSubmit = (values: SignupFormValues) => {
    userStore.updateUser(values);
    history.push({ pathname: "/home" });
  };

  return (
    <IonPage>
      <SignupForm user={userStore.user} onSubmit={handleSubmit} />
    </IonPage>
  );
};

export default Signup;
