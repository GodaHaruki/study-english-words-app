import { grid } from '../grid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { StudyType, studyTypeProps } from './[studyType]/types';

interface CustomCardProps {
  className: string;
  link: string;
  title: string;
  desc: string;
  titleClassName?: string;
  descClassName?: string;
}

function CustomCard(props: CustomCardProps) {
  return (
    <Link
      href={props.link}
      className={
        props.className +
        ' card card-normal col-span-10 col-start-2 no-underline'
      }
    >
      <div className='card-body col-span-10'>
        <h2 className={props.titleClassName + ' card-title text-3xl'}>
          {props.title}
        </h2>
        <p className={props.descClassName + ' card-text'}>{props.desc}</p>
      </div>
    </Link>
  );
}

interface StudyTypeCardProps extends CustomCardProps {
  link: `./${(typeof StudyType)[keyof typeof StudyType]}`;
}

export default function Study() {
  const className = 'rounded-lg bg-slate-100';
  const studyTypeCardPropsArray: StudyTypeCardProps[] = [
    {
      className,
      link: `./${StudyType.E2J}`,
      title: studyTypeProps.E2J.title,
      desc: studyTypeProps.E2J.desc,
    },
    {
      className,
      link: `./${StudyType.J2E}`,
      title: studyTypeProps.J2E.title,
      desc: studyTypeProps.J2E.desc,
    },
    {
      className,
      link: `./${StudyType.Dict}`,
      title: studyTypeProps.Dict.title,
      desc: studyTypeProps.Dict.desc,
    },
  ];

  return (
    <div className={grid}>
      <Header />
      <h2 className='col-span-12 mb-0 mt-5 bg-gradient-to-r from-primary to-primary-content bg-clip-text text-center text-3xl text-transparent'>
        学習方法を選択してください
      </h2>
      {studyTypeCardPropsArray.map((props: StudyTypeCardProps) => (
        <CustomCard key={props.title} {...props} />
      ))}
      <Footer />
    </div>
  );
}
