import * as React from "react";
import { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useHistory } from "react-router-dom";

export const Context = React.createContext<any>(null);

export default function AuthProvider({ children }: any) {
  const history = useHistory();
  const [authState, setAuthState] = React.useState<AuthState | null>(null);
  const [user, setUser] = React.useState<Record<string, any> | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        setAuthState(AuthState.SignedIn);
      } catch (e) {
        setUser(null);
        setAuthState(null);
        history.push("/login");
      }
    })();
  }, []);

  React.useEffect(() => {
    onAuthUIStateChange(async (nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData ?? null);
    });
  }, []);

  return (
    <Context.Provider value={{ authState, user }}>{children}</Context.Provider>
  );
}
