import SkeletonComponent from "@/components/Skeleton";
import CardGridLayout from "@/components/CardGridLayout";

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
