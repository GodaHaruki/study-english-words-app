export default function Footer() {
  return (
    <div className="col-span-12 grid grid-cols-12 bg-primary-content">
      <h2 className="col-span-12 text-center text-xl mt-10 mb-6">Licence</h2>
      <p className="col-span-12 text-center">このアプリは <a href="https://www.diqt.net/ja" target="_blank">DiQt</a> で配布されている以下のデータを使用・改変しています。</p>
      <a className="col-span-12 text-center my-0" href="https://www.diqt.net/ja/word_tags/1/download" target="_blank">基礎英単語{"("}NGSL{")"}</a>
      <a className="col-span-12 text-center my-0" href="https://www.diqt.net/ja/word_tags/2/download" target="_blank">学術英単語{"("}NAWL{")"}</a>
      <a className="col-span-12 text-center my-0" href="https://www.diqt.net/ja/word_tags/3/download" target="_blank">TOEIC英単語{"("}TSL{")"}</a>
      <a className="col-span-12 text-center my-0" href="https://www.diqt.net/ja/word_tags/4/download" target="_blank">ビジネス英単語{"("}BSL{")"}</a>
      <p className="col-span-12 text-center mt-6 mb-10"><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank">CC BY-SA 4.0</a> に基づきライセンスされています。改変が加えられています。</p>
    </div>
  )
}