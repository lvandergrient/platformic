import * as React from "react";

import { Context } from "../providers/PlatformicProvider";

export default function usePlatformic() {
  return React.useContext(Context);
}
