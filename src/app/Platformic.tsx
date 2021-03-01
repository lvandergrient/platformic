import * as React from "react";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.min.css";

import Main from "./Main";
import PlatformicProvider from "./providers/PlatformicProvider";
import AuthProvider from "./providers/AuthProvider";
import GlobalStyles from "./GlobalStyles";
import { MenuItem, RoutesConfig } from "./types";

interface Props {
  awsExports: any;
  routes?: RoutesConfig;
  menuItems?: MenuItem[];
}

export default function Platformic({
  awsExports,
  routes = {},
  menuItems = [],
}: Props) {
  React.useLayoutEffect(() => {
    Amplify.configure(awsExports);
  }, [awsExports]);

  return (
    <PlatformicProvider routes={routes} menuItems={menuItems}>
      <ThemeProvider theme={{ gridSize: 12 }}>
        <Router>
          <AuthProvider>
            <GlobalStyles />
            <Main />
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </PlatformicProvider>
  );
}
