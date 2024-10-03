import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="col-span-12 text-center">App Name</h1>
      <h2 className="col-span-12 text-center">無料で英単語を学ぼう</h2>
      <Link href="./start" className="col-span-12 mx-auto btn btn-wide btn-primary">Start</Link>
      <Link href="./login" className="col-span-12 mx-auto btn btn-wide btn-secondary">Login</Link>

      <h2 className="col-span-12 text-center">基本無料</h2>
      <p className="col-span-12">description</p>
    </>
  );
}
