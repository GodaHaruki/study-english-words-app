'use client';

import { useRouter } from 'next/navigation';

export default function StudyWordSetId() {
  const router = useRouter();

  return <>{router.push('/study')}</>;
}
