const DetailSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="w-[327px] h-[245px] bg-grey-d rounded-md mb-3 web:w-[450px] web:h-[335px]" />
      <div className="w-[90px] h-[25px] bg-grey-d rounded-xl mb-[30px] ml-3" />
      <div className="w-[327px] h-[60px] bg-grey-d rounded-md mb-3" />
    </div>
  );
};

export default DetailSkeleton;
