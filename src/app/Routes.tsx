import * as React from "react";
import { Switch, Route } from "react-router-dom";

import LoginScreen from "./screens/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="" component={LoginScreen} />
    </Switch>
  );
}
