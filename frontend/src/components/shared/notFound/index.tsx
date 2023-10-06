import { INotFound } from "./notFound.interface";

export function NotFound({ searchKeyword }: INotFound) {
  return (
    <div className="p-4 w-fit h-fit left-0 top-0 bg-zinc-950 rounded-2xl">
      <div className=" text-amber-400 text-xl font-normal font-['Inter'] leading-7">
        No results found for "{searchKeyword}"
      </div>
    </div>
  );
}
