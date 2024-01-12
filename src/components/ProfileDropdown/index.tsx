"use client";

import { AuthUser } from "@/type/user";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function ProfileDropdown({ user }: { user: AuthUser }) {
  const router = useRouter();

  return (
    <Dropdown placement="bottom-end" backdrop="opaque">
      <DropdownTrigger>
        <Avatar
          as={Link}
          className="transition-transform cursor-pointer"
          src={user.image ?? ""}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="solid">

        <DropdownItem key="profile" className="h-14 gap-2" isReadOnly>
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user.email}</p>
        </DropdownItem>
        <DropdownItem key="theme-switcher" isReadOnly>
          <ThemeSwitcher />
        </DropdownItem>
        <DropdownItem
          key="dashboard"
          onPress={() => router.push("/user/dashboard")}
        >
          Dashboard
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onPress={() => router.push("/api/auth/signout")}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
