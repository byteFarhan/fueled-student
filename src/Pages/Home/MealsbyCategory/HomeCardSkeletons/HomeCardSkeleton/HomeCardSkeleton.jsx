import Skeleton from "react-loading-skeleton";

const HomeCardSkeleton = () => {
  return (
    <div className="max-w-[500px] mx-auto w-full p-2 bg-slate-700 text-slate-300 rounded-md">
      <div className="w-full bg-center bg-cover rounded-md h-60">
        <Skeleton
          className="h-full"
          highlightColor="#a7a9ac2b"
          baseColor="#4d51559b"
        />
      </div>
      <div className="w-full ">
        <div className="w-full pt-4 pb-2 min-h-24">
          <h1 className="w-10/12 mx-auto text-2xl font-bold">
            <Skeleton
              highlightColor="#a7a9ac2b"
              baseColor="#4d51559b"
              height={40}
            />
          </h1>
        </div>
        <h1 className="mx-auto text-2xl font-bold">
          <Skeleton
            highlightColor="#a7a9ac2b"
            baseColor="#4d51559b"
            height={40}
          />
        </h1>
      </div>
    </div>
  );
};

export default HomeCardSkeleton;
