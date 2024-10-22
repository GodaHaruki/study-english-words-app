import { grid } from '@/app/grid';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

const studyTypeText = {'e2j':"英語を日本語に", 'j2e':"日本語を英語に", 'dict':"単語帳"};


function Title(props: { type: "e2j"|"j2e"|"dict" }) {
  return (
    <div className={grid+' col-span-12'}>
      <p className='text-center text-3xl col-span-4 my-5'>
        <Link href='/study' className='text-inherit no-underline'>
          戻る
        </Link>
      </p>
      <p className='text-center text-3xl col-span-8 md:col-span-4 my-5'>{studyTypeText[props.type]}</p>
    </div>
  );
}
const StudyType = {
  j2e: 'j2e',
  e2j: 'e2j',
  dict: 'dict',
} as const;

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const studyTypes = Object.keys(StudyType);

  return studyTypes.map((studyType) => ({ studyType }));
};

export default function Page({
  params,
}: {
  params: { studyType: (typeof StudyType)[keyof typeof StudyType] };
}) {
  
  const { studyType } = params;

  const selectItemJSX:{
    e2j: JSX.Element[];
    j2e: JSX.Element[];
    dict: JSX.Element[];
  } = {
    "e2j": [
      <label className={'grid grid-cols-12 col-span-12 text-center text-2xl mt-6'}>
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select name='range' className='select select-bordered self-center w-5/6 my-0'>
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label className={'grid grid-cols-12 col-span-12 text-center text-2xl mt-6'}>
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題数</p>
        </div>
        <div className='col-span-6'>
          <select name='num' className='select select-bordered self-center w-5/6 my-0'>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>
      </label>],
    "j2e": [
      <label className={'grid grid-cols-12 col-span-12 text-center text-2xl mt-6'}>
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select name='range' className='select select-bordered self-center w-5/6 my-0'>
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label className={'grid grid-cols-12 col-span-12 text-center text-2xl mt-6'}>
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題数</p>
        </div>
        <div className='col-span-6'>
          <select name='num' className='select select-bordered self-center w-5/6 my-0'>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>
      </label>],
    "dict": [
      <label className={'grid grid-cols-12 col-span-12 text-center text-2xl mt-6'}>
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select name='range' className='select select-bordered self-center w-5/6 my-0'>
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label className={'grid grid-cols-12 col-span-12 text-center text-2xl mt-6'}>
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題数</p>
        </div>
        <div className='col-span-6'>
          <select name='num' className='select select-bordered self-center w-5/6 my-0'>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>
      </label>]
  };

  return (
    <div className={grid}>
      <Header />
      <Title type={studyType}/>
      <div className={'col-span-12 mx-5'}>
        <form className='grid grid-cols-12 col-span-12 bg-slate-100 rounded-lg'>
          {selectItemJSX[studyType].map((item) => item)}
          <button type='submit' className='btn btn-primary col-start-3 col-span-8 self-center mt-6 mb-3'>スタート</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
