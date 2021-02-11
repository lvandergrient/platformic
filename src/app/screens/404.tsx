import * as React from "react";
import El from "ui-box-plus";

export default function NotFoundScreen() {
  return (
    <El fx="1" ai="center" jc="center" backgroundColor="var(--lightgray)">
      <El is="h1" fw="700" fz="120px">
        404
      </El>
      <El is="h2" color="var(--mediumgray)">
        Page Not Found
      </El>
    </El>
  );
}
