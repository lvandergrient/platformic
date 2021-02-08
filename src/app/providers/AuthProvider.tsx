import * as React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export const Context = React.createContext<any>(null);

export default function AuthProvider({ children }: any) {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return (
    <Context.Provider value={{ authState, user }}>{children}</Context.Provider>
  );
}
