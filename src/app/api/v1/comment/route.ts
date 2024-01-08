import prismaSingleton from "@/libs/prisma";
import { CommentRequest } from "@/type/comment";

export async function POST(request: Request) {
  const commentRequest: CommentRequest = await request.json()

  const createComment = await prismaSingleton.comment.create({ data: commentRequest })

  if (!createComment) return Response.json({ status: 500, isCreated: false })

  return Response.json({ status: 200, isCreated: true })
}