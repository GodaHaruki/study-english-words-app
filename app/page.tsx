import Link from "next/link";
import { Grid } from "./grid";

export function Header() {
  return (
      <div className="col-span-12 bg-primary-content grid grid-cols-12">
      <div className="col-start-5 col-span-4">
        <p className="text-center text-3xl">App Name</p>
      </div>
      <div className="col-span-4 my-auto hidden md:block">
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
      <h2 className="col-span-12 text-center">無料で英単語を学ぼう</h2>
      <Link href="./signup" className="col-span-12 mx-auto btn btn-wide btn-primary">Start</Link>
    </Grid>
  );
}
