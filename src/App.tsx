import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import Home from "pages/Home";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <IonSplitPane>
            <Route exact path="/home" component={Home} />
          </IonSplitPane>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
