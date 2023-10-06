import { ICard } from "../verticalCard/card.interface";

export function InlineCard({ film }: ICard) {
  return (
    <div className="bg-zinc-950 rounded-xl shadow-md overflow-hidden flex flex-row px-4">
      <img className="w-28 h-40" src={film.image} alt="filmImage" />
      <div className="w-full h-40 flex flex-col justify-between">
        <div className="h-fit p-4  w-full text-slate-200 flex justify-between">
          <div className="rounded-2xl bg-gray-900 p-1">
            <span>{film.year}</span>
          </div>
          <div className="w-fit flex justify-center gap-2 items-center text-slate-200 text-xs font-normal font-['Inter'] leading-none">
            IMDb:
            <img src="/icons/star.svg" alt="star" />
            <span className="text-white text-sm font-bold">{film.rating}</span>
          </div>
        </div>
        <div className="h-fit p-4  w-full text-slate-200 flex flex-col justify-between">
          <div className="text-sky-300 text-base font-bold">{film.title}</div>
          <div className=" w-full ">
            <span className="text-slate-200 text-xs font-normal font-['Inter'] leading-none">
              {film.genres}{" "}
            </span>
            <span className="text-sky-300 text-xs font-normal font-['Inter'] leading-none">
              ·
            </span>
            <span className="text-slate-200 text-xs font-normal font-['Inter'] leading-none">
              {" "}
              {film.duration} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
