import * as React from "react";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.min.css";

import Main from "./Main";
import PlatformicProvider from "./providers/PlatformicProvider";
import AuthProvider from "./providers/AuthProvider";
import GlobalStyles from "./GlobalStyles";

interface Props {
  cognitoUserPoolId: string;
  cognitoRegion: string;
  cognitoAppClientId: string;
}

export default function Platformic({
  cognitoUserPoolId,
  cognitoRegion,
  cognitoAppClientId,
}: Props) {
  React.useLayoutEffect(() => {
    Amplify.configure({
      Auth: {
        region: cognitoRegion,
        userPoolId: cognitoUserPoolId,
        userPoolWebClientId: cognitoAppClientId,
      },
    });
  }, [cognitoUserPoolId]);

  return (
    <PlatformicProvider>
      <AuthProvider>
        <ThemeProvider theme={{ gridSize: 12 }}>
          <Router>
            <GlobalStyles />
            <Main />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </PlatformicProvider>
  );
}
