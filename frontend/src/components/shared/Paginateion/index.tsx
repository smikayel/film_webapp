import { useState } from "react";

import { IconCheckbox } from "../iconCheckbox";
import { IPagination } from "./pagination.interface";
import { ReactComponent as HorizontalSvg } from "../../../assets/horizontal-cards-icon.svg";
import { ReactComponent as VerticalSvg } from "../../../assets/vertical-cards-icon.svg";

export function Paginateion({ searchResult }: IPagination) {
  const [selectedLayout, setSelectedLayout] = useState("vertical");

  console.log(selectedLayout);
  return (
    <div className="w-full flex flex-col gap-8 text-slate-200">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          Found{" "}
          <div className="text-amber-400">{searchResult.founded + 500}</div>{" "}
          Movies
        </div>

        <div className="flex flex-row gap-2">
          layout:{" "}
          <IconCheckbox
            value={selectedLayout === "vertical"}
            Icon={
              <VerticalSvg
                fill={`${
                  selectedLayout === "vertical" ? "#FFD166" : "#4a5568"
                }`}
                height={"15px"}
              />
            }
            onSelect={() => {
              setSelectedLayout("vertical");
            }}
          />
          <IconCheckbox
            value={selectedLayout === "horizontal"}
            Icon={
              <HorizontalSvg
                fill={`${
                  selectedLayout === "horizontal" ? "#FFD166" : "#4a5568"
                }`}
                height={"15px"}
              />
            }
            onSelect={() => {
              setSelectedLayout("horizontal");
            }}
          />
        </div>
      </div>
    </div>
  );
}
