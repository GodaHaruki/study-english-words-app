import { grid } from '@/app/grid';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='col-span-12 bg-primary-content pb-4'>
      <aside className={grid}>
        <h6 className='footer-title col-span-12 mt-10 text-center'>Licence</h6>
        <p className='col-span-12 text-center'>
          このアプリは
          <Link
            href='https://w6w.diqt.net/ja'
            target='_blank'
            rel='noopener noreferrer'
          >
            DiQt
          </Link>
          で配布されている以下のデータを使用・改変しています。
        </p>
        <Link
          className='col-span-6 my-0 text-center lg:col-span-3 lg:col-start-4'
          href='https://www.diqt.net/ja/word_tags/1/download'
          target='_blank'
          rel='noopener noreferrer'
        >
          基礎英単語(NGSL)
        </Link>
        <Link
          className='col-span-6 my-0 text-center lg:col-span-3'
          href='https://www.diqt.net/ja/word_tags/2/download'
          target='_blank'
          rel='noopener noreferrer'
        >
          学術英単語(NAWL)
        </Link>
        <Link
          className='col-span-6 my-0 text-center lg:col-span-3 lg:col-start-4'
          href='https://www.diqt.net/ja/word_tags/3/download'
          target='_blank'
          rel='noopener noreferrer'
        >
          TOEIC英単語(TSL)
        </Link>
        <Link
          className='col-span-6 my-0 text-center lg:col-span-3'
          href='https://www.diqt.net/ja/word_tags/4/download'
          target='_blank'
          rel='noopener noreferrer'
        >
          ビジネス英単語(BSL)
        </Link>
        <Link
          className='col-span-12 my-0 text-center'
          href='https://creativecommons.org/licenses/by-sa/4.0/deed.ja'
          target='_blank'
          rel='noopener noreferrer'
        >
          CC BY-SA 4.0
        </Link>
      </aside>
    </div>
  );
}
