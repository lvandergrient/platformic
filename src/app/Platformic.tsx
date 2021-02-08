import * as React from "react";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.min.css";

import Main from "./Main";
import PlatformicProvider from "./providers/PlatformicProvider";
import GlobalStyles from "./GlobalStyles";

interface Props {
  cognitoClientPoolId: string;
}

export default function Platformic({ cognitoClientPoolId }: Props) {
  React.useLayoutEffect(() => {
    Amplify.configure({});
  }, [cognitoClientPoolId]);

  return (
    <PlatformicProvider>
      <ThemeProvider theme={{ gridSize: 12 }}>
        <Router>
          <GlobalStyles />
          <Main />
        </Router>
      </ThemeProvider>
    </PlatformicProvider>
  );
}
