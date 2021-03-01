import * as React from "react";
import El from "ui-box-plus";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthState } from "@aws-amplify/ui-components";

import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import LoginScreen from "./screens/Login";
import NotFoundScreen from "./screens/404";
import useAuth from "./hooks/useAuth";
import usePlatformic from "./hooks/usePlatformic";

export default function Main() {
  const { authState, user } = useAuth();
  const { routes } = usePlatformic();

  return (
    <Switch>
      {authState === AuthState.SignedIn && user ? (
        <Route
          path=""
          render={() => (
            <El h="100vh">
              <Header />
              <El fx="1" fxd="row">
                <MainMenu />
                <El fx="1">
                  <Switch>
                    {Object.keys(routes).map((path) => (
                      <Route
                        key={path}
                        path={path}
                        exact
                        render={(props) =>
                          routes[path].redirect ? (
                            <Redirect to={routes[path].redirect!} />
                          ) : (
                            React.createElement(routes[path].component, props)
                          )
                        }
                      />
                    ))}
                    <Route path="" component={NotFoundScreen} />
                  </Switch>
                </El>
              </El>
            </El>
          )}
        />
      ) : (
        <Route path="/login" component={LoginScreen} />
      )}
    </Switch>
  );
}
