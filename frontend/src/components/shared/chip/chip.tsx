import { IChip } from "./chip.interface";

export function Chip({ name, icon }: IChip) {
  return (
    <div className="flex flex-row justify-between items-center gap-2">
      <img className="w-auto h-[20px] " src={icon} alt="chip icon" />
      <span className="text-slate-200">{name}</span>
    </div>
  );
}
