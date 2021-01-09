import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <IonSplitPane>
            <Route
              exact
              path="/home"
              render={() => {
                return (
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
                );
              }}
            />
          </IonSplitPane>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
