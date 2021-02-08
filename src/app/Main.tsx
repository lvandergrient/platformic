import * as React from "react";
import El from "ui-box-plus";

import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Routes from "./Routes";

export default function Main() {
  return (
    <El h="100vh">
      <Header />
      <El fx="1" fxd="row">
        <MainMenu />
        <El fx="1">
          <Routes />
        </El>
      </El>
    </El>
  );
}
