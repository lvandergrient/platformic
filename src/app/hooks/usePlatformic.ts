import * as React from "react";

import { Context } from "../providers/PlatformicProvider";
import { MenuItem, RoutesConfig } from "../types";

interface Props {
  routes: RoutesConfig;
  menuItems: MenuItem[];
}

export default function usePlatformic() {
  return React.useContext<Props>(Context);
}
