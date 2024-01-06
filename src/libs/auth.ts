import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { AuthUser } from "@/type/user";

export const authUserSession = async (): Promise<AuthUser | undefined> => {
  const session = await getServerSession(authOption)
  return session?.user;
}