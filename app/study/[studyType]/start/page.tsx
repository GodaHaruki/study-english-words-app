import { StudyType } from "../types";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const studyTypes = Object.keys(
    StudyType,
  ) as unknown as (keyof typeof StudyType)[];

  return studyTypes.map((studyType) => ({
    studyType: StudyType[studyType as keyof typeof StudyType],
  }));
};

export default function Study() {
  // const { wordSetIdParam, studyTypeParam } = useParams()
  const words = [
    { mean: '反応する', word: 'react' },
    { mean: '次に', word: 'next' },
  ] as const;
  return (
    <div className='grid grid-cols-12'>
      {words.map((word) => {
        return(
          <p key={word.word}>{word.word},{word.mean}</p>
        )
        })}
    </div>
  );
}
