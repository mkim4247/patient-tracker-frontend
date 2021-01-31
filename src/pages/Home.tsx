import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IonPage } from "@ionic/react";
import { toJS } from "mobx";
import { observer } from "mobx-react";

import useStores from "hooks/useStores";

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { userStore } = useStores();

  return (
    <IonPage>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </IonPage>
  );
};

export default observer(Home);
