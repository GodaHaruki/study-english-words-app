import Link from "next/link";
import { Grid } from "./grid";
import Header from "@/components/Header";

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
