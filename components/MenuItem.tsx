import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItem: FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <span className="hidden sm:inline my-2 text-sm">{title}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
