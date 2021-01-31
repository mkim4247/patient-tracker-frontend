import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IonPage } from "@ionic/react";

import { LandingFormValues } from "types";
import useStores from "hooks/useStores";
import LandingForm from "forms/LandingForm";

const Landing: React.FC<RouteComponentProps> = ({ history }) => {
  const { userStore } = useStores();

  const handleSubmit = (values: LandingFormValues) => {
    userStore.updateUser(values);
  };

  return (
    <IonPage>
      <LandingForm user={userStore.user} onSubmit={handleSubmit} />
    </IonPage>
  );
};
