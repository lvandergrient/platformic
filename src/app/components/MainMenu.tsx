import * as React from "react";
import { Menu } from "antd";

import usePlatformic from "../hooks/usePlatformic";

export default function MainMenu() {
  const { schemas } = usePlatformic();

  return <Menu mode="vertical" theme="light"></Menu>;
}
