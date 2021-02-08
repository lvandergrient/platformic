import * as React from "react";

export const Context = React.createContext<any>(null);

export default function PlatformicProvider({ children }: any) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
