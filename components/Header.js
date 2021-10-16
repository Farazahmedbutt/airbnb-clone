import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import { useRouter } from "next/router";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRangePicker } from "react-date-range";
function Header({ placeholder }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
    setSearchInput("");
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  return (
    <header className="header flex sticky py-5 px-4  z-50 grid grid-cols-3 bg-white shadow-md md:px-20">
      <div
        className="header__left relative flex items-center h-7 md:h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="header__center flex items-center md:border-2 rounded-full py-2 sm:pl-5  md:shadow-sm">
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 hidden md:inline md:mx-2" />
      </div>
      <div className="header__right flex space-x-3  items-center justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hidden sm:inline" />
        <div className="flex items-center space-x-2  p-2 rounded-full border-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            verticalHeight={370}
          />
          <div className="flex border-b-2 items-center mb-2">
            <h2 className="font-semibold text-2xl flex-grow">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-large outline-none text-red-400 font-semibold"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
