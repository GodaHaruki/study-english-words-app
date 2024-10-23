"use client";

import { useState } from "react";

export const Dict = () => {
  const [isAuto, setIsAuto] = useState<boolean>(false);

  const questionNumList: number[] = [
    10, 20, 30, 40, 50, 100, 150, 200, 300, 400, 500,
  ];

  const selectItemJSX: JSX.Element[]=[
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
        <div className='col-span-6 flex items-center justify-center'>
          <input
            type='checkbox'
            name='auto'
            className='toggle toggle-primary'
            checked={isAuto}
            onChange={(e) => setIsAuto(e.target.checked)}
          />
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
            disabled={!isAuto}
            className='select select-bordered my-0 w-5/6 self-center'
          >
            {Array(11)
              .fill(null)
              .map((_, i) => {
                return (
                  <option key={i + 5} value={i + 5}>
                    {i + 5}秒
                  </option>
                );
              })}
          </select>
        </div>
      </label>,
    ]

  return <>{selectItemJSX.map((item) => item)}</>;
};
