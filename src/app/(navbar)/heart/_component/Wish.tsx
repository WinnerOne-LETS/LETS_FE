import LikeButton from "@/app/_component/common/atom/LikeButton";
import type { PackageInfo } from "@/app/types";
import Link from "next/link";
import Tag from "./Tag";

interface Props {
  data: PackageInfo;
}

const Wish = ({ data }: Props) => {
  return (
    <Link
      href={`/items/${data.packageId}`}
      className="w-full h-[90px] flex gap-4 "
    >
      <div className="w-[90px] h-full rounded-[12px] overflow-hidden">
        <img
          className="object-cover w-full"
          src={data.imageUrl}
          alt={"이미지"}
        />
      </div>
      <div className="flex flex-col gap-[10px] w-[156px]">
        <p className="w-full truncate text-lg font-medium text-black-2">
          {data.title}
        </p>
        <div className="flex gap-2">
          {data?.hashtags
            .slice(0, 3)
            .map((tagName) => <Tag key={tagName} tagName={tagName} />)}
        </div>
        <p className="text-red-1 text-xxs font-light">
          {data.lodgeDays}박{data.tripDays}일{" "}
          <span className="ml-1 text-sm font-medium">
            {data.minPrice.toLocaleString()}원
          </span>
        </p>
      </div>
      <div className="relative w-[51px]">
        <LikeButton id={data.packageId} isWish={data.isWish} />
        <Link
          href={`/compare?lid=${data.packageId}`}
          className="w-full text-center h-[41px] text-white text-xxs font-medium p-2 leading-3 tracking-tighter bg-custom-gradient-pink gap-2 rounded-[12px] absolute bottom-0 right-0"
        >
          1:1
          <br />
          비교하기
        </Link>
      </div>
    </Link>
  );
};

export default Wish;