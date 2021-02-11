import * as React from "react";

export interface RoutesConfig {
  [path: string]: {
    component: any;
  };
}
