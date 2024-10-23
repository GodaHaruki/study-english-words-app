'use client';

import { useState } from 'react';

export default function SelectItem(props: {
  studyType: 'j2e' | 'e2j' | 'dict';
}) {
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [j2eType, setJ2eType] = useState<'select' | 'input'>('select');

  const questionNumList: number[] = [
    10, 20, 30, 40, 50, 100, 150, 200, 300, 400, 500,
  ];

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
          {questionNumList.map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
          <option key='all' value='-1'>
            全て(約1000~7000問)
          </option>
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
            {questionNumList.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
            <option key='all' value='-1'>
              全て(約1000~7000問)
            </option>
          </select>
        </div>
      </label>,
      <div
        key='3'
        className={'col-span-12 mt-6 grid grid-cols-12 text-center text-2xl'}
      >
        <div className='col-span-6 flex grow items-center justify-center'>
          <p className='mx-2 my-0'>出題方法</p>
        </div>
        <label className='col-span-3 flex items-center justify-center'>
          <input
            className='my-0'
            type='radio'
            id='select'
            name='type'
            value='select'
            onChange={(e) => setJ2eType(e.target.value as 'select' | 'input')}
            checked={j2eType === 'select'}
          />
          <p className='my-0'>選択問題</p>
        </label>
        <label className='col-span-3 flex grow items-center justify-center'>
          <input
            className='my-0'
            type='radio'
            id='select'
            name='type'
            value='input'
            onChange={(e) => setJ2eType(e.target.value as 'select' | 'input')}
            checked={j2eType === 'input'}
          />
          <p className='my-0'>スペル入力</p>
        </label>
      </div>,
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
    ],
  };

  return <>{selectItemJSX[props.studyType].map((item) => item)}</>;
}
