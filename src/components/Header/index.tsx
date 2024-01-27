import { Stack } from "@mui/joy";
import React from "react";
import Logo from "./Logo";

const Header = () => (
  <Stack direction="row" alignItems="center" height="60px">
    <Logo />
  </Stack>
);

export default Header;
