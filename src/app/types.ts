export interface RoutesConfig {
  [path: string]: {
    component?: any;
    redirect?: string;
  };
}

export interface MenuItem {
  label: string;
  to: string;
  icon?: string;
}
