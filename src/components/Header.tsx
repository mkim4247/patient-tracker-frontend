import React from "react";
import {
  IonBackButton,
  IonHeader,
  IonMenuButton,
  IonToolbar,
} from "@ionic/react";

interface Props {
  home?: boolean;
  login?: boolean;
}

const Header: React.FC<Props> = ({ home = false, login = false }) => (
  <IonHeader></IonHeader>
);

export default Header;
