import SkeletonComponent from "@/components/Util/SkeletonCard";
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
