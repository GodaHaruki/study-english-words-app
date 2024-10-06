"use client";

import { useState } from "react";
import { Grid } from "../grid";
import type { Word } from "../study/[wordSetId]/[studyType]/page";

enum SearchType {
  Mean,
  Word,
}

export default function Word() {
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Word)
  const [query, setQuery] = useState<string>("");

  const [serachedResult, setSearchedResult] = useState<Word>();

  return (
    <Grid>
      <select className="col-span-3 md:col-span-2 select select-bordered w-full"
        onChange={(evt) => {
          switch (evt.target.value) {
            case "mean":
              setSearchType(SearchType.Mean);
              break;
            case "word":
              setSearchType(SearchType.Word);
              break;
          }
        }}>
        <option disabled selected>Search by</option>
        <option value="mean">mean</option>
        <option value="word">word</option>
      </select>
      <input type="text" placeholder="search word..." className="col-span-9 md:col-span-10 input input-bordered w-full"
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />


    </Grid>
  )
}