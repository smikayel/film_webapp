import { useState } from "react";

import { IconCheckbox } from "../iconCheckbox";
import { IPagination } from "./pagination.interface";
import { ReactComponent as HorizontalSvg } from "../../../assets/horizontal-cards-icon.svg";
import { ReactComponent as VerticalSvg } from "../../../assets/vertical-cards-icon.svg";
import { Button } from "../button";
import { Card } from "../verticalCard";
import { InlineCard } from "../inlineCard";
import filmServiceInstance from "../../../services/filmsService";

export function Paginateion({
  searchResult,
  setResultsState,
  setFoundedResults,
}: IPagination) {
  const [selectedLayout, setSelectedLayout] = useState("vertical");

  const handleGetNextPage = async () => {
    if (!searchResult.next) return;
    const results = await filmServiceInstance.getPaginatedResult(
      searchResult.next
    );
    setFoundedResults(results, setResultsState);
  };

  const handleGetBackPage = async () => {
    if (!searchResult.previous) return;
    const results = await filmServiceInstance.getPaginatedResult(
      searchResult.previous
    );
    setFoundedResults(results, setResultsState);
  };

  return (
    <div className="w-4/5 flex flex-col gap-8 text-slate-200">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          Found <div className="text-amber-400">{searchResult.founded}</div>{" "}
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

      <div
        className={
          selectedLayout === "vertical"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 "
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        }
      >
        {searchResult.films.map((film, index) =>
          selectedLayout === "vertical" ? (
            <Card key={index} film={film} />
          ) : (
            <InlineCard film={film} />
          )
        )}
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          Showing {searchResult.from} to {searchResult.to} of{" "}
          <div className="text-amber-400">{searchResult.founded}</div> results
        </div>
        <div className="flex flex-row gap-4">
          <Button
            label="Previous"
            onClick={() => {
              handleGetBackPage();
            }}
          />
          <Button
            label="Next"
            onClick={() => {
              handleGetNextPage();
            }}
          />
        </div>
      </div>
    </div>
  );
}
