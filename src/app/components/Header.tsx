import * as React from "react";
import styled from "styled-components";
import El from "ui-box-plus";

import UserMenu from "./UserMenu";

const HeaderStyles = styled(El)`
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 60px;
  background: white;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.12);
  z-index: 1;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <El fx="1" />
      <El>
        <UserMenu />
      </El>
    </HeaderStyles>
  );
}
