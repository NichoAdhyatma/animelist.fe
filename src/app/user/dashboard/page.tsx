import { authUserSession } from "@/libs/auth";
import { Avatar, Button, Link } from "@nextui-org/react";

export default async function Page() {
  const user = await authUserSession();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-semibold text-lg">Welcome, {user?.name}</p>

      <Avatar
        src={user?.image ?? ""}
        alt="profile-image"
        className="w-32 h-32 mb-4"
      />

      <div className="flex flex-wrap gap-4">
        <Button as={Link} href="/user/dashboard/collection" color="primary">
          My Collection
        </Button>
        <Button>My Comment</Button>
      </div>
    </div>
  );
}
