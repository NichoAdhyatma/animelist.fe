import BackButton from "@/components/Util/BackButton";
import CardComment from "@/components/Util/CardComment";
import Header from "@/components/Util/Header";
import { authUserSession } from "@/libs/auth";
import prismaSingleton from "@/libs/prisma";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

export default async function Page() {
  const user = await authUserSession();
  const comments = await prismaSingleton.comment.findMany({
    where: {
      user_email: user?.email ?? "",
    },
  });
  return (
    <div>
      <BackButton />

      <Header title="My Comment" />

      <div className="grid gird-cols-1 gap-4">
        {comments?.map((comment, index) => (
          <CardComment index={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}
