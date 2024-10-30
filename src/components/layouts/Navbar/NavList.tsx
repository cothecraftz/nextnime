import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavlistProps = {
  setIsNavList: React.Dispatch<React.SetStateAction<boolean>>;
};

type DataList = {
  name: string;
  path: string;
};

type DataListProps = DataList[];

const dataListNav: DataListProps = [
  { name: 'anime', path: '/anime' },
  { name: 'manga', path: '/manga' },
];

const NavList = ({ setIsNavList }: NavlistProps) => {
  const pathname = usePathname();

  return (
    <div className="order-2 md:order-1 flex flex-col gap-4 items-center md:flex-row md:gap-2 lg:gap-3 md:p-0">
      {dataListNav.map((list: DataList, index: number) => (
        <Link
          onClick={() => setIsNavList(false)}
          href={list.path}
          className={`${
            pathname.includes(list.path) ? 'text-primary' : 'text-black-gray'
          } capitalize hover:text-primary hover:underline`}
          key={index}
        >
          {list.name}
        </Link>
      ))}
    </div>
  );
};

export default NavList;
