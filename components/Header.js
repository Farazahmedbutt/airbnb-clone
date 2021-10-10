import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="header flex sticky py-5 px-5 z-50 grid grid-cols-3 bg-white shadow-md md:px-20">
      <div className="header__left relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="header__center flex items-center md:border-2 rounded-full py-2 pl-5  md:shadow-sm">
        <input
          type="text"
          className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 hidden md:inline md:mx-2" />
      </div>
      <div className="header__right flex space-x-3  items-center justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2  p-2 rounded-full border-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
