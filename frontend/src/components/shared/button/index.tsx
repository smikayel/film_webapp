import { IButton } from "./button.interface";

export function Button({ label, onClick }: IButton) {
  return (
    <button
      className="bg-slate-900 text-slate-200 px-3 py-2 outline-none rounded-xl text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
