'use client';

import { grid } from '@/app/grid';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const studyTypeText = {'e2j':"英語を日本語に", 'j2e':"日本語を英語に", 'dict':"単語帳"};
const selectItemJSX:{
  e2j: JSX.Element[];
  j2e: JSX.Element[];
  dict: JSX.Element[];
} = {
  "e2j": [
  <label key='1' className={grid+' col-span-12 text-center text-2xl'}>
    <p className='col-span-4'>問題数を選択してください</p>
    <select name='test' className='select select-bordered self-center col-span-3 w-full md:col-span-2'>
      <option value='10'>10</option>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </label>,
  <label key='1' className={grid+' col-span-12 text-center text-2xl'}>
    <p className='col-span-4'>問題数を選択してください</p>
    <select name='test' className='select select-bordered self-center col-span-3 w-full md:col-span-2'>
      <option value='10'>10</option>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </label>],
  "j2e": [],
  "dict": []
};

function Title(props: { type: "e2j"|"j2e"|"dict" }) {
  return (
    <div className={grid+' col-span-12 bg-primary-content'}>
      <p className='text-center text-3xl col-span-4'>
        <Link href='/study' className='text-inherit no-underline'>
          戻る
        </Link>
      </p>
      <p className='text-center text-3xl col-span-4'>{studyTypeText[props.type]}</p>
    </div>
  );
}

export default function StudyWordSetId() {
  const studyType  = useParams<{studyType:"e2j"|"j2e"|"dict"}>().studyType;
  return (
    <div className={grid}>
      <Header />
      <Title type={studyType}/>
      <div className={grid+' col-span-12'}>
        <div className={'col-span-12 bg-slate-100 rounded-lg mx-5'}>
          <form className={grid+' col-span-12'}>
            {selectItemJSX[studyType].map((item) => item)}
            <button type='submit' className='btn btn-primary col-span-4 mx-auto'>スタート</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
