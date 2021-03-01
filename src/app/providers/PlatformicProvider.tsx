import * as React from "react";
import { RoutesConfig, MenuItem } from "../types";

export const Context = React.createContext<any>(null);

interface Props {
  children: any;
  routes: RoutesConfig;
  menuItems: MenuItem[];
}

export default function PlatformicProvider({
  routes,
  menuItems,
  children,
}: Props) {
  return (
    <Context.Provider value={{ routes, menuItems }}>
      {children}
    </Context.Provider>
  );
}
