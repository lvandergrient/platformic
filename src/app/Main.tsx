import * as React from "react";
import El from "ui-box-plus";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthState } from "@aws-amplify/ui-components";

import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import LoginScreen from "./screens/Login";
import useAuth from "./hooks/useAuth";

export default function Main() {
  const { authState } = useAuth();

  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      {authState === AuthState.SignedIn && (
        <Route
          path=""
          render={() => (
            <El h="100vh">
              <Header />
              <El fx="1" fxd="row">
                <MainMenu />
                <El fx="1">
                  <Switch>
                    <Route path="" render={() => <div>Logged in</div>} />
                  </Switch>
                </El>
              </El>
            </El>
          )}
        />
      )}
      <Redirect to="/login" />
    </Switch>
  );
}
