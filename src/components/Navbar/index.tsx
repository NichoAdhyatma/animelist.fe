"use client";

import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import SearchComponent from "../Util/Search";

export default function NavbarComponent({children} : {children: React.ReactNode}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll={true}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            AnimeList.
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <SearchComponent />
        </NavbarItem>

        <NavbarItem>
          {children}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <SearchComponent />
      </NavbarMenu>
    </Navbar>
  );
}
