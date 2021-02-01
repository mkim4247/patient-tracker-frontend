import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IonPage, IonLabel } from "@ionic/react";

import { LoginFormValues } from "types";
import useStores from "hooks/useStores";
import LoginForm from "forms/LoginForm";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { userStore } = useStores();

  const handleSubmit = (values: LoginFormValues) => {
    userStore.updateUser(values);

    history.push({ pathname: "/home" });
  };

  return (
    <IonPage>
      <LoginForm user={userStore.user} onSubmit={handleSubmit} />
    </IonPage>
  );
};

export default Login;
