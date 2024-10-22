import React from 'react';
import { StudyType } from './types';
import { J2E } from './J2E';
import { E2J } from './E2J';
import { Dict } from './Dict';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const studyTypes = Object.keys(StudyType);

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
  return pages[studyTypeKey];
}
