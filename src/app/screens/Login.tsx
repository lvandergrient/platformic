import * as React from "react";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import { AuthState } from "@aws-amplify/ui-components";
import { useHistory } from "react-router-dom";
import El from "ui-box-plus";

export default function LoginScreen() {
  const history = useHistory();

  return (
    <El backgroundColor="var(--lightgray)">
      <AmplifyAuthenticator
        handleAuthStateChange={(authState) => {
          if (authState === AuthState.SignedIn) {
            history.push("/");
          }
        }}
      >
        <AmplifySignIn slot="sign-in" hideSignUp usernameAlias="email" />
      </AmplifyAuthenticator>
    </El>
  );
}
