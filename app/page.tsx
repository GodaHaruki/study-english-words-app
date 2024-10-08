"use client";

import Link from "next/link";
import { Grid } from "./grid";
import { useState } from "react";

export function Header() {
  enum SearchType {
    Mean,
    Word,
  }
  const setSearchType = useState<SearchType>(SearchType.Word)[1]

  return (
    <div className="col-span-12 bg-primary-content grid grid-cols-12">
      <div className="lg:col-start-5 lg:col-span-4 md:col-span-6 col-start-1 col-span-4">
        <p className="text-center text-3xl">App Name</p>
      </div>
      
      <select className="col-span-3 md:col-span-2 lg:col-span-1 select select-bordered w-full my-auto"
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
        <option value="word">word</option>
        <option value="mean">mean</option>
      </select>

      <div className="col-span-5 md:col-span-4 lg:col-span-3 md:col-start-9 lg:col-start-10 my-auto">
        <label className="input input-bordered flex items-center gap-2 ml-auto">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Grid>
      <Header />
      <h2 className="mb-0 mt-5 text-3xl col-span-12 text-center bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent">英語→日本語 で基礎を学習</h2>
      <h2 className="mb-0 text-3xl col-span-12 text-center bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent">日本語→英語 でスペルも確認</h2>
      <h2 className="mb-0 text-3xl col-span-12 text-center bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent">単語帳を作成して復習</h2>
      <h2 className="mb-5 mt-0 text-3xl col-span-12 text-center bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent">無料で英単語を学ぼう</h2>
      <Link href="./study" className="col-span-12 mx-auto btn btn-wide btn-primary text-xl">Let&apos;s start!</Link>
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-10 col-start-2 divider"/>
      </div>
      <h2 className="mb-0 mt-5 text-3xl col-span-12 text-center bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent">How to use</h2>
    </Grid>
  );
}
