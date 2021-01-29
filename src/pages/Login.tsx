import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IonPage, IonLabel } from "@ionic/react";

import useStores from "hooks/useStores";
import LoginForm from "forms/LoginForm";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { userStore } = useStores();

  return (
    <IonPage>
      <LoginForm />
    </IonPage>
  );
};

export default Login;
