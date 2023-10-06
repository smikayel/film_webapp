import { useEffect, useState } from "react";
import { ISearchBar } from "./search.interface";

export function SearchBar({ setValue }: ISearchBar) {
  const [search, setSearchValue] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setValue(search);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [search, setValue]);

  return (
    <div className="relative w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-[500px]">
      <input
        className="w-full h-12 p-6 pl-12 rounded-2xl bg-slate-900 text-slate-100 text-xl font-normal font-inter leading-7 placeholder-slate-600 focus:outline-none"
        type="text"
        placeholder="Search for your next movie"
        value={search}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <img
        className="absolute left-4 top-4 w-4 h-4"
        src="/icons/search.svg"
        alt="Search Icon"
      />
    </div>
  );
}
