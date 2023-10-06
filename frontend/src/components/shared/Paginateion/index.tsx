import { useState } from "react";

import { IconCheckbox } from "../iconCheckbox";
import { IPagination } from "./pagination.interface";
import { ReactComponent as HorizontalSvg } from "../../../assets/horizontal-cards-icon.svg";
import { ReactComponent as VerticalSvg } from "../../../assets/vertical-cards-icon.svg";
import { Button } from "../button";
import { Card } from "../verticalCard";
import { InlineCard } from "../inlineCard";

const films = [
  {
    id: 0,
    title: "KING KONG",
    image: "https://via.placeholder.com/224x332",
    director: "string",
    genres: "Action, Adventure, Drama",
    duration: 187,
    score: "",
    rating: 7.62,
    overview: "string",
    year: 2005,
    actors: "string",
  },
  {
    id: 0,
    title: "KING KONG",
    image: "https://via.placeholder.com/224x332",
    director: "string",
    genres: "Action, Adventure, Drama",
    duration: 187,
    score: "",
    rating: 7.62,
    overview: "string",
    year: 2005,
    actors: "string",
  },
  {
    id: 0,
    title: "KING KONG",
    image: "https://via.placeholder.com/224x332",
    director: "string",
    genres: "Action, Adventure, Drama",
    duration: 187,
    score: "",
    rating: 7.62,
    overview: "string",
    year: 2005,
    actors: "string",
  },
  {
    id: 0,
    title: "KING KONG",
    image: "https://via.placeholder.com/224x332",
    director: "string",
    genres: "Action, Adventure, Drama",
    duration: 187,
    score: "",
    rating: 7.62,
    overview: "string",
    year: 2005,
    actors: "string",
  },
  {
    id: 0,
    title: "KING KONG",
    image: "https://via.placeholder.com/224x332",
    director: "string",
    genres: "Action, Adventure, Drama",
    duration: 187,
    score: "",
    rating: 7.62,
    overview: "string",
    year: 2005,
    actors: "string",
  },
  {
    id: 0,
    title: "KING KONG",
    image: "https://via.placeholder.com/224x332",
    director: "string",
    genres: "Action, Adventure, Drama",
    duration: 187,
    score: "",
    rating: 7.62,
    overview: "string",
    year: 2005,
    actors: "string",
  },
];

export function Paginateion({ searchResult }: IPagination) {
  const [selectedLayout, setSelectedLayout] = useState("vertical");

  return (
    <div className="w-4/5 flex flex-col gap-8 text-slate-200">
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

      <div
        className={
          selectedLayout === "vertical"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 "
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        }
      >
        {films.map((film, index) =>
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
          <div className="text-amber-400">{searchResult.founded + 500}</div>{" "}
          results
        </div>
        <div className="flex flex-row gap-4">
          <Button
            label="Previous"
            onClick={() => {
              console.log("previous");
            }}
          />
          <Button
            label="Next"
            onClick={() => {
              console.log("next");
            }}
          />
        </div>
      </div>
    </div>
  );
}
