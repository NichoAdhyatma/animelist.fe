import { authUserSession } from "@/libs/auth";
import { Button, Link } from "@nextui-org/react";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 items-center">
      {user && <Link href="/user/dashboard">Dashboard</Link>}
      <Button as={Link} href={actionUrl} color="primary">
        {actionLabel}
      </Button>
    </div>
  );
};

export default UserActionButton;
