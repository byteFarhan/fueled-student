import HomeCardSkeleton from "./HomeCardSkeleton/HomeCardSkeleton";

const HomeCardSkeletons = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <HomeCardSkeleton />
      <HomeCardSkeleton />
      <HomeCardSkeleton />
      <HomeCardSkeleton />
      <HomeCardSkeleton />
      <HomeCardSkeleton />
    </div>
  );
};

export default HomeCardSkeletons;
