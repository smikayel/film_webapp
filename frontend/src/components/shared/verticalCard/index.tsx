import { ICard } from "./card.interface";

export function Card({ film }: ICard) {
  return (
    <div className="Group10 w-56 h-96  ">
      <div className="Group8 w-56 h-80 relative absolute">
        <img
          className="Bitmap w-56 h-80  rounded-2xl"
          src={film.image}
          alt="movie url"
        />
        <div className="Group9 w-11 h-6 left-0 top-[31px] absolute">
          <div className="Rectangle w-11 h-6 left-0 top-0 absolute bg-gray-950 rounded-tr-lg rounded-br-lg" />
          <div className=" left-[8px] top-[4px] absolute text-slate-200 text-xs font-normal font-['Inter'] leading-none">
            {film.year}
          </div>
        </div>
      </div>
      <div className="w-auto flex  flex-col gap-2 justify-center items-center text-sky-300">
        <div className="text-sky-300 w-full flex justify-center items-center text-base font-bold">
          {film.title}
        </div>
        <div className="text-center ite w-full flex justify-center items-center">
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
        <div className="w-full flex justify-center gap-2 items-center text-slate-200 text-xs font-normal font-['Inter'] leading-none">
          IMDb:
          <img src="/icons/star.svg" alt="star" />
          <span className="text-white text-sm font-bold">{film.rating}</span>
        </div>
      </div>
    </div>
  );
}
