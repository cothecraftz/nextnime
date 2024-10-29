import React, { ReactNode } from "react";
import Link from "next/link";
import Switch from "@/components/ui/Switch";

type IProps = {
  children: ReactNode;
  onTabChange: Function;
};

const PopularMangaLayout = ({ children, onTabChange }: IProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          href="/manga/populer/1"
          className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
        >
          Paling Populer
        </Link>
        <Switch dataSwitch={["Manga", "Novel"]} onTabChange={onTabChange} />
      </div>
      <div className="grid-card">{children}</div>
    </div>
  );
};

export default PopularMangaLayout;
