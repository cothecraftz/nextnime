import Link from "next/link";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  link: string;
};

const RecomendationLayout = ({ children, link }: IProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <Link
          href={link}
          className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
        >
          Recomendations
        </Link>
      </div>
      <div className="grid-card">{children}</div>
    </div>
  );
};

export default RecomendationLayout;
