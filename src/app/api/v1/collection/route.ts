import prismaSingleton from "@/libs/prisma";
import { CollectionRequest } from "@/type/collection";

export async function POST(request: Request) {
  const collectionRequest: CollectionRequest = await request.json()

  const createCollection = await prismaSingleton.collection.create({ data: collectionRequest })

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