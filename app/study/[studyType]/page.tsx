'use client';

import { grid } from '@/app/grid';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function Title(props: { type: string }) {
  return (
    <div className={grid+' col-span-12 bg-primary-content'}>
      <p className='text-center text-3xl col-span-4'>
        <Link href='/study' className='text-inherit no-underline'>
          戻る
        </Link>
      </p>
      <p className='text-center text-3xl col-span-8 sm:col-span-4 sm:col-start-5'>
        {props.type}
      </p>
    </div>
  );
}

export default function StudyWordSetId() {
  const studyType  = useParams<{studyType:"e2j"|"j2e"|"dict"}>().studyType;
  const studyTypeText = {'e2j':"英語を日本語に", 'j2e':"日本語を英語に", 'dict':"単語帳"};

  return (
    <div className={grid}>
      <Header />
      <Title type={studyTypeText[studyType]}/>
      <div className={grid+' col-span-12'}>
      <div className={'col-span-12 bg-slate-100 rounded-lg mx-5'}>
        <p className='col-span-12 text-center text-2xl'>{studyType}</p>
      </div>
      </div>
      <Footer />
    </div>
  );
}
