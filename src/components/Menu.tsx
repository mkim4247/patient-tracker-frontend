import React from "react";
import { useLocation } from "react-router-dom";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import useStores from "hooks/useStores";

const Menu: React.FC = () => {
  const location = useLocation();
  const { userStore } = useStores();

  const handleClick = () => {
    userStore.resetUser();
  };

  return (
    <IonMenu>
      <IonContent></IonContent>
    </IonMenu>
  );
};

export default Menu;
