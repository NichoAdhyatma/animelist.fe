import prismaSingleton from "@/libs/prisma";
import CardComment from "../Util/CardComment";
import { authUserSession } from "@/libs/auth";

export default async function CommentBox({
  anime_mal_id,
}: {
  anime_mal_id: number;
}) {
  const user = await authUserSession();
  const comments = await prismaSingleton.comment.findMany({
    where: {
      anime_mal_id: Number(anime_mal_id),
      user_email: { not: user?.email ?? "" },
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div className="flex flex-col gap-4">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <CardComment index={index} comment={comment} />
        ))
      ) : (
        <div className="text-center">Empty here ... 🚀</div>
      )}
    </div>
  );
}
