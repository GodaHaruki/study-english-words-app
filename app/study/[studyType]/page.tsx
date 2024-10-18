'use client';

import { grid } from '@/app/grid';
import { useParams } from 'next/navigation';

export default function StudyWordSetId() {
  const { studyType } = useParams()

  return (
    <div className={grid}>
      <p className='col-span-12 text-center text-2xl'>{studyType}</p>
    </div>
  );
}
