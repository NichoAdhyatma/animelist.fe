import { authUserSession } from "@/libs/auth";
import ProfileDropdown from "../ProfileDropdown";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();

  return (
    <>
      {user ? (
        <ProfileDropdown user={user} />
      ) : (
        <Button as={Link} href={"/api/auth/signin"} color="primary">
          Sign In
        </Button>
      )}
    </>
  );
};

export default UserActionButton;
