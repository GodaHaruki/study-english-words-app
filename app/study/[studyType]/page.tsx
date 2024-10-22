const StudyType = {
  J2E: 'J2E',
  E2J: 'E2J',
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

  return <div>sample {studyType}</div>;
}
