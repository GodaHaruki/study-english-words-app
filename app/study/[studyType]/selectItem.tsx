"use client"

import { useState } from "react";

export default function SelectItem(props:{studyType:"j2e"|"e2j"|"dict"}) {
  const [isAuto,setIsAuto] = useState<boolean>(false);

  const selectItemJSX: {
    e2j: JSX.Element[];
    j2e: JSX.Element[];
    dict: JSX.Element[];
  } = {
    e2j: [
      <label
        key='1'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select
            name='range'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label
        key='2'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題数</p>
        </div>
        <div className='col-span-6'>
          <select
            name='num'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>
      </label>,
    ],
    j2e: [
      <label
        key='1'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select
            name='range'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label
        key='2'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題数</p>
        </div>
        <div className='col-span-6'>
          <select
            name='num'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>
      </label>,
    ],
    dict: [
      <label
        key='1'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>出題範囲</p>
        </div>
        <div className='col-span-6'>
          <select
            name='range'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            <option value='all'>全て</option>
            <option value='ngsl'>NGSL</option>
            <option value='nawl'>NAWL</option>
            <option value='tsl'>TSL</option>
            <option value='bsl'>BSL</option>
            <option value='mydict'>My単語帳</option>
          </select>
        </div>
      </label>,
      <label
        key='2'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>自動再生</p>
        </div>
        <div className='col-span-6'>
          <input type='checkbox' name='auto' checked={isAuto} onChange={(e)=>setIsAuto(e.target.checked)}/>
        </div>
      </label>,
      <label
        key='3'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex items-center justify-center'>
          <p className='mx-2 my-0'>間隔</p>
        </div>
        <div className='col-span-6'>
          <select
            name='delay'
            className='select select-bordered my-0 w-5/6 self-center'
          >
            {Array(11).fill(null).map((_,i)=>{
              return(
                <option key={i+5} value={i+5}>{i+5}秒</option>
              )
            })}
          </select>
        </div>
      </label>,
    ],
  };

  return (
    <>
    {selectItemJSX[props.studyType].map((item)=>item)}
    </>
  );
}