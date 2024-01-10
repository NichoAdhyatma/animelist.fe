import BackButton from "@/components/Util/BackButton";
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
          <Card key={index} as={Link} href={`/anime/${comment.anime_mal_id}`}>
            <CardHeader>{comment.anime_title}</CardHeader>
            <CardBody>{comment.comment}</CardBody>
            <CardFooter className="gap-4 justify-end text-tiny">
              {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
