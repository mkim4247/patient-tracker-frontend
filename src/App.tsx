import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Landing from "pages/Landing";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <IonSplitPane>
            <Route exact path="/home" component={Home} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </IonSplitPane>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
