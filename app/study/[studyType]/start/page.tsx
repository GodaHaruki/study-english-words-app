'use client';

import { Grid } from '@/app/grid';
// import { useParams } from "next/navigation"
import { useEffect, useState } from 'react';

export type Word = {
  word: string;
  mean: string;
};

type StudyComponent = ({ word }: { word: Word }) => React.ReactNode;

const J2E: StudyComponent = ({ word }) => {
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => setChecked(false), [word]);

  return (
    <>
      <div className='mockup-window col-span-12 border border-base-300'>
        <div className='flex justify-center bg-base-200 px-4 py-16'>
          <input
            type='radio'
            name='word'
            id='mean'
            className='peer/mean hidden'
            onChange={() => setChecked(!checked)}
            checked={checked}
          ></input>
          <label
            htmlFor='mean'
            className='block size-full text-center peer-checked/mean:hidden'
          >
            <p className='text-8xl font-bold'>{word.mean}</p>
          </label>

          <input
            type='radio'
            name='word'
            id='word'
            className='peer/word hidden'
            onChange={() => setChecked(!checked)}
            checked={!checked}
          ></input>
          <label
            htmlFor='word'
            className='block size-full text-center peer-checked/word:hidden'
          >
            <p className='text-8xl font-bold'>{word.word}</p>
          </label>
        </div>
      </div>
    </>
  );
};

export default function Study() {
  // const { wordSetIdParam, studyTypeParam } = useParams()
  const words: Word[] = [
    { mean: '反応する', word: 'react' },
    { mean: '次に', word: 'next' },
  ];
  const [position, setPosition] = useState<number>(0);

  return (
    <Grid className='px-10'>
      <J2E word={words[position]} />
      <button
        className='col-span-6 w-full bg-base-200 py-10'
        onClick={() => setPosition(Math.max(0, position - 1))}
      >
        {'<'}
      </button>

      <button
        className='col-span-6 w-full bg-base-200 py-10'
        onClick={() => setPosition(Math.min(words.length - 1, position + 1))}
      >
        {'>'}
      </button>
    </Grid>
  );
}
