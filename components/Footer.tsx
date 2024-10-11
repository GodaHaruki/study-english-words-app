import { grid } from "@/app/grid";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="col-span-12 pb-4 bg-primary-content">
      <aside className={grid}>
        <h6 className="col-span-12 footer-title text-center mt-10">Licence</h6>
        <p className="col-span-12 text-center">
          このアプリは
          <Link href="https://w6w.diqt.net/ja" target="_blank" rel="noopener noreferrer">DiQt</Link>
          で配布されている以下のデータを使用・改変しています。
        </p>
        <Link className="col-span-6 lg:col-span-3 lg:col-start-4 text-center my-0" href="https://www.diqt.net/ja/word_tags/1/download" target="_blank" rel="noopener noreferrer">基礎英単語(NGSL)</Link>
        <Link className="col-span-6 lg:col-span-3 text-center my-0" href="https://www.diqt.net/ja/word_tags/2/download" target="_blank" rel="noopener noreferrer">学術英単語(NAWL)</Link>
        <Link className="col-span-6 lg:col-span-3 lg:col-start-4 text-center my-0" href="https://www.diqt.net/ja/word_tags/3/download" target="_blank" rel="noopener noreferrer">TOEIC英単語(TSL)</Link>
        <Link className="col-span-6 lg:col-span-3 text-center my-0" href="https://www.diqt.net/ja/word_tags/4/download" target="_blank" rel="noopener noreferrer">ビジネス英単語(BSL)</Link>
        <Link className="col-span-12 text-center my-0" href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</Link>
      </aside>
    </div>
  )
}