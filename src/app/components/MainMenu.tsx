import * as React from "react";
import { Menu } from "antd";
import * as R from "ramda";
import { useHistory, useLocation } from "react-router-dom";

import usePlatformic from "../hooks/usePlatformic";

export default function MainMenu() {
  const { menuItems } = usePlatformic();
  const history = useHistory();
  const location = useLocation();

  const selectedMenuItem = String(
    menuItems.findIndex(R.propEq("to", location.pathname))
  );

  return (
    <Menu mode="vertical" theme="light" selectedKeys={[selectedMenuItem]}>
      {menuItems.map(({ label, icon, to }, index) => (
        <Menu.Item
          key={String(index)}
          icon={icon && <span>{icon}</span>}
          onClick={() => {
            !R.isNil(to) && history.push(to);
          }}
        >
          {label}
        </Menu.Item>
      ))}
    </Menu>
  );
}
