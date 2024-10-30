import React, { ReactNode } from "react";
import Switch from "@/components/ui/Switch";
import Link from "next/link";
import Button from "@/components/ui/Button";

type IProps = {
  children: ReactNode;
  onTabChange: Function;
};

const PopularAnimeLayout = ({ children, onTabChange }: IProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          href="/anime/populer/1"
          className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
        >
          Paling Populer
        </Link>
        <Switch dataSwitch={["Movie", "Tv Series"]} onTabChange={onTabChange} />
      </div>
      <div className="grid-card">{children}</div>
      <Link href="/anime/populer/1" className="w-full my-6 flex justify-center items-center">
        <Button variant="primary">Lihat Selengkapnya</Button>
      </Link>
    </div>
  );
};

export default PopularAnimeLayout;
