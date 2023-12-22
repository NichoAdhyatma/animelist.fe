import SkeletonComponent from "@/components/AnimeList/Skeleton";
import CardGridLayout from "@/components/AnimeList/CardGridLayout";

export default function Loading() {
  return (
    <CardGridLayout>
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </CardGridLayout>
  );
}
