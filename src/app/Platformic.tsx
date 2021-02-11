import * as React from "react";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.min.css";

import Main from "./Main";
import PlatformicProvider from "./providers/PlatformicProvider";
import AuthProvider from "./providers/AuthProvider";
import GlobalStyles from "./GlobalStyles";
import { RoutesConfig } from "./types";

interface Props {
  awsExports: any;
  routes?: RoutesConfig;
}

export default function Platformic({ awsExports, routes = {} }: Props) {
  React.useLayoutEffect(() => {
    Amplify.configure(awsExports);
  }, [awsExports]);

  return (
    <PlatformicProvider routes={routes}>
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
