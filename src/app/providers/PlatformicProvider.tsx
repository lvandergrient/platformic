import * as React from "react";
import { RoutesConfig } from "../types";

export const Context = React.createContext<any>(null);

interface Props {
  children: any;
  routes: RoutesConfig;
}

export default function PlatformicProvider({ routes, children }: Props) {
  return <Context.Provider value={{ routes }}>{children}</Context.Provider>;
}
