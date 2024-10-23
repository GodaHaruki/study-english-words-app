import { grid } from '@/app/grid';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';
import { StudyType, studyTypeProps } from './types';
import { J2E } from './J2E';
import { E2J } from './E2J';
import { Dict } from './Dict';

function Title(props: { type: 'e2j' | 'j2e' | 'dict' }) {
  return (
    <div className={grid + ' col-span-12'}>
      <p className='col-span-4 my-5 text-center text-3xl'>
        <Link href='/study' className='text-inherit no-underline'>
          戻る
        </Link>
      </p>
      <p className='col-span-8 my-5 text-center text-3xl md:col-span-4'>
        {
          studyTypeProps[
            Object.entries(StudyType).find(
              ([, value]) => props.type === value,
            )![0] as keyof typeof StudyType
          ].title
        }
      </p>
    </div>
  );
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const studyTypes = Object.keys(
    StudyType,
  ) as unknown as (keyof typeof StudyType)[];

  return studyTypes.map((studyType) => ({
    studyType: StudyType[studyType as keyof typeof StudyType],
  }));
};

export default function Page({
  params,
}: {
  params: { studyType: (typeof StudyType)[keyof typeof StudyType] };
}) {
  const { studyType } = params;

  const studyTypeKey = Object.entries(StudyType).find(
    ([, value]) => studyType === value,
  )![0] as keyof typeof StudyType;

  const pages: Record<keyof typeof StudyType, React.ReactNode> = {
    J2E: <J2E />,
    E2J: <E2J />,
    Dict: <Dict />,
  };
  return (
    <div className={grid}>
      <Header />
      <Title type={studyType} />
      <div className={'col-span-12 mx-5'}>
        <form
          className='col-span-12 grid grid-cols-12 rounded-lg bg-slate-100'
          action='./start'
        >
          {pages[studyTypeKey]}
          <button
            type='submit'
            className='btn btn-primary col-span-8 col-start-3 mb-3 mt-6 self-center'
          >
            スタート
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
