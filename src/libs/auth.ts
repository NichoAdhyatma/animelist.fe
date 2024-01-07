import { getServerSession } from "next-auth";

import { AuthUser } from "@/type/user";
import { authOption } from "@/utils/authOption";

export const authUserSession = async (): Promise<AuthUser | undefined> => {
  const session = await getServerSession(authOption)
  return session?.user;
}