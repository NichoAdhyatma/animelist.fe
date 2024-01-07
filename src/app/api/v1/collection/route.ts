import prismaSingleton from "@/libs/prisma";

export async function POST(request: Request) {
  const { anime_mal_id, user_email } = await request.json()
  const data = { anime_mal_id, user_email }

  const createCollection = await prismaSingleton.collection.create({ data })

  if (!createCollection) return Response.json({ status: 500, isCreated: false })

  return Response.json({ status: 200, isCreated: true })
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const deleteCollection = await prismaSingleton.collection.delete({ where: { id } });

  if (!deleteCollection) {
    return Response.json({ status: 500, isCreated: true })
  }

  return Response.json({ status: 200, isCreated: false })
}