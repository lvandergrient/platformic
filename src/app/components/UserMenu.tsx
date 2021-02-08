import * as React from "react";
import styled from "styled-components";
import El from "ui-box-plus";
import { Dropdown, Menu, Divider, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import useAuth from "../hooks/useAuth";

const UserMenuStyles = styled(El)`
  cursor: pointer;
  justify-content: center;
  padding: 6px 12px;
`;

export default function UserMenu() {
  const { user } = useAuth();

  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomRight"
      overlay={
        <Menu>
          <El pl pr pt>
            <Typography.Text strong mark>
              {user.name}
            </Typography.Text>
            <Typography.Text type="secondary">{user.email}</Typography.Text>
          </El>
          <Divider />
          <Menu.Item icon={<LogoutOutlined />}>Log out</Menu.Item>
        </Menu>
      }
    >
      <UserMenuStyles>
        <El is="img" src={user.picture} h={4} w={4} borderRadius="100%" />
      </UserMenuStyles>
    </Dropdown>
  );
}
