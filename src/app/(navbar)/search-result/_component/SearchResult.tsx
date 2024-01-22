import { PackageInfo, PackagesWithPage } from "@/app/types";
import PackagesList from "./PackagesList";

interface Props {
  data: PackagesWithPage<PackageInfo[]>;
}

const SearchResult = ({ data }: Props) => {
  return (
    <div className="w-full">
      <PackagesList data={data?.packages} />
    </div>
  );
};

export default SearchResult;
