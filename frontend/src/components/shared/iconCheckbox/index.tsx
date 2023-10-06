import { IIconCheckbox } from "./iconCheckbox.interface";

export function IconCheckbox({ value, Icon, onSelect }: IIconCheckbox) {
  return (
    <div
      className={`rounded-[5px] p-2 ${value ? "bg-zinc-950" : "bg-slate-900"} `}
      onClick={() => {
        onSelect();
      }}
    >
      {Icon}
    </div>
  );
}
