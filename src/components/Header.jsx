import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";

import Logo from "../assets/logo.svg";
import AvatarImg from "../assets/avatar.jpg";

export const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <img src={Logo} alt="" className="w-6 mr-4" />
        <p className="font-bold text-inherit">Design Challenge</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Avatar src={AvatarImg} isBordered color="success" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
