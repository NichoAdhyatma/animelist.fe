import { authUserSession } from "@/libs/auth";
import { Image } from "@nextui-org/react";

export default async function Page() {
  const user = await authUserSession();

  return (
    <>
      <p>Welcome, {user?.name}</p>
      <Image src={user?.image ?? ""} width={250} height={250} />
    </>
  );
}
