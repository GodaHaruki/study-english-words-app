import Link from "next/link";
import { Grid } from "./grid";

export default function Home() {
  return (
    <Grid>
      <h1 className="col-span-12 text-center">App Name</h1>
      <h2 className="col-span-12 text-center">無料で英単語を学ぼう</h2>
      <Link href="./signup" className="col-span-12 mx-auto btn btn-wide btn-primary">Start</Link>
      <Link href="./signin" className="col-span-12 mx-auto btn btn-wide btn-secondary">Signin</Link>

      <h2 className="col-span-12 text-center">基本無料</h2>
      <p className="col-span-12">description</p>
    </Grid>
  );
}
