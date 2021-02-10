import * as React from "react";
import { AuthState } from "@aws-amplify/ui-components";

import { Context } from "../providers/AuthProvider";

export default function useAuth() {
  return React.useContext<{
    authState: AuthState;
    user: Record<string, any> | undefined;
  }>(Context);
}
